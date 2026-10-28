/**
 * ============================================================
 *  HUS MOTORS — Main JavaScript
 *  Handles: WhatsApp links, navigation, form, scroll effects
 * ============================================================
 *  This file reads from BUSINESS (src/data/business.js).
 *  No third-party libraries. No tracking. No cookies.
 * ============================================================
 */

(function () {
  "use strict";

  /* ── Helpers ──────────────────────────────────────────── */

  /**
   * Build a WhatsApp URL with a pre-filled message.
   * Uses the whatsappNumber from BUSINESS config.
   */
  function whatsappURL(message) {
    var num = (typeof BUSINESS !== "undefined" && BUSINESS.whatsappNumber)
      ? BUSINESS.whatsappNumber
      : "263778891162";
    var encoded = encodeURIComponent(message || "Hello HUS MOTORS, I would like to enquire about your services.");
    return "https://wa.me/" + num + "?text=" + encoded;
  }

  /**
   * Safely set href on an element by ID.
   */
  function setHref(id, url) {
    var el = document.getElementById(id);
    if (el) el.href = url;
  }

  /**
   * Sanitise user input — strip HTML tags and limit length.
   */
  function sanitise(str, maxLen) {
    if (!str) return "";
    var clean = str.replace(/<[^>]*>/g, "").trim();
    return clean.substring(0, maxLen || 500);
  }

  /* ── Business Data Hydration ────────────────────────── */

  /**
   * Sync content from BUSINESS (src/data/business.js) into the DOM.
   * This allows the owner to change details on GitHub without editing HTML.
   */
  function hydrateFromBusiness() {
    if (typeof BUSINESS === "undefined") return;

    // Contact Phone
    if (BUSINESS.phone) {
      var phoneClean = BUSINESS.phone.replace(/\s+/g, "");
      var phoneEls = [
        document.getElementById("contact-phone-link"),
        document.getElementById("footer-phone-link")
      ];
      for (var p = 0; p < phoneEls.length; p++) {
        if (phoneEls[p]) {
          phoneEls[p].textContent = BUSINESS.phone;
          phoneEls[p].href = "tel:" + phoneClean;
        }
      }
      var callBtn = document.getElementById("contact-call-btn");
      if (callBtn) {
        callBtn.href = "tel:" + phoneClean;
      }
    }

    // Contact Email
    if (BUSINESS.email) {
      var emailEls = [
        document.getElementById("contact-email-link"),
        document.getElementById("footer-email-link")
      ];
      for (var e = 0; e < emailEls.length; e++) {
        if (emailEls[e]) {
          emailEls[e].textContent = BUSINESS.email;
          emailEls[e].href = "mailto:" + BUSINESS.email;
        }
      }
      var emailBtn = document.getElementById("contact-email-btn");
      if (emailBtn) {
        emailBtn.href = "mailto:" + BUSINESS.email;
      }
    }

    // Subheadlines and text
    if (BUSINESS.heroSubheadline) {
      var heroSub = document.getElementById("hero-subheadline");
      if (heroSub) heroSub.textContent = BUSINESS.heroSubheadline;
    }
    if (BUSINESS.aboutText) {
      var aboutEl = document.getElementById("about-main-text");
      if (aboutEl) aboutEl.textContent = BUSINESS.aboutText;
    }
    if (BUSINESS.ctaHeading) {
      var ctaHeadingEl = document.getElementById("cta-heading");
      if (ctaHeadingEl) ctaHeadingEl.textContent = BUSINESS.ctaHeading;
    }
    if (BUSINESS.ctaText) {
      var ctaTextEl = document.getElementById("cta-text");
      if (ctaTextEl) ctaTextEl.textContent = BUSINESS.ctaText;
    }

    // Services dynamic text sync
    if (Array.isArray(BUSINESS.services)) {
      for (var sIdx = 0; sIdx < BUSINESS.services.length; sIdx++) {
        var sData = BUSINESS.services[sIdx];
        var card = document.getElementById("card-" + sData.id);
        if (card) {
          var titleEl = card.querySelector(".service-card__title");
          if (titleEl && sData.title) titleEl.textContent = sData.title;
          var descEl = card.querySelector(".service-card__description");
          if (descEl && sData.description) descEl.textContent = sData.description;
        }
      }
    }

    // Optional Address / Location
    if (BUSINESS.address || BUSINESS.city) {
      var fullAddress = [BUSINESS.address, BUSINESS.city, BUSINESS.country].filter(Boolean).join(", ");
      var locItem = document.getElementById("contact-location-item");
      var addrText = document.getElementById("contact-address-text");
      if (locItem && addrText) {
        addrText.textContent = fullAddress;
        locItem.style.display = "flex";
      }
      var footerLocItem = document.getElementById("footer-location-item");
      var footerAddrText = document.getElementById("footer-address-text");
      if (footerLocItem && footerAddrText) {
        footerAddrText.textContent = fullAddress;
        footerLocItem.style.display = "flex";
      }
    }

    // Optional Opening Hours
    if (BUSINESS.openingHours) {
      var hoursItem = document.getElementById("contact-hours-item");
      var hoursText = document.getElementById("contact-hours-text");
      if (hoursItem && hoursText) {
        hoursText.textContent = BUSINESS.openingHours;
        hoursItem.style.display = "flex";
      }
    }
  }

  /* ── WhatsApp Link Setup ─────────────────────────────── */

  function setupWhatsAppLinks() {
    var defaultMsg = "Hello HUS MOTORS, I would like to enquire about your services.";
    var defaultURL = whatsappURL(defaultMsg);

    // General WhatsApp buttons
    setHref("nav-whatsapp-btn", defaultURL);
    setHref("mobile-nav-whatsapp-btn", defaultURL);
    setHref("hero-whatsapp-btn", defaultURL);
    setHref("contact-whatsapp-btn", defaultURL);
    setHref("cta-whatsapp-btn", defaultURL);
    setHref("floating-whatsapp-btn", defaultURL);

    // Build map from BUSINESS.services if present
    var serviceMessages = {};
    if (typeof BUSINESS !== "undefined" && Array.isArray(BUSINESS.services)) {
      for (var k = 0; k < BUSINESS.services.length; k++) {
        var s = BUSINESS.services[k];
        if (s.id && s.whatsappMessage) {
          serviceMessages[s.id] = s.whatsappMessage;
        }
      }
    }

    // Fallbacks if not in BUSINESS.services
    var defaults = {
      "motor-spares":
        "Hello HUS MOTORS, I am enquiring about motor spares. I need a part for my vehicle — here are the details:",
      "accident-vehicles":
        "Hello HUS MOTORS, I have an accident-damaged vehicle I would like to sell. Here are the details:",
      "engine-rebuilding":
        "Hello HUS MOTORS, I need help with engine rebuilding or repairs. My vehicle details are:",
      "motorcycle-servicing":
        "Hello HUS MOTORS, I need motorcycle servicing. My motorcycle details are:",
      "key-programming":
        "Hello HUS MOTORS, I need key programming for my vehicle. The details are:",
      "aircon-refuelling":
        "Hello HUS MOTORS, I need air-conditioning refuelling for my vehicle. The details are:",
      "battery-charging":
        "Hello HUS MOTORS, I need battery charging for my vehicle. The details are:",
    };

    var serviceCTAs = document.querySelectorAll(".service-card__cta[data-service]");
    for (var i = 0; i < serviceCTAs.length; i++) {
      var link = serviceCTAs[i];
      var serviceId = link.getAttribute("data-service");
      var msg = serviceMessages[serviceId] || defaults[serviceId] || defaultMsg;
      link.href = whatsappURL(msg);
    }
  }

  /* ── Header Scroll Effect ────────────────────────────── */

  function setupHeaderScroll() {
    var header = document.getElementById("header");
    if (!header) return;

    var scrolled = false;

    function checkScroll() {
      var shouldBeScrolled = window.scrollY > 60;
      if (shouldBeScrolled !== scrolled) {
        scrolled = shouldBeScrolled;
        header.classList.toggle("header--scrolled", scrolled);
      }
    }

    window.addEventListener("scroll", checkScroll, { passive: true });
    checkScroll();
  }

  /* ── Mobile Navigation ───────────────────────────────── */

  function setupMobileNav() {
    var toggle = document.getElementById("menu-toggle");
    var mobileNav = document.getElementById("mobile-nav");
    if (!toggle || !mobileNav) return;

    var isOpen = false;

    function openNav() {
      isOpen = true;
      toggle.classList.add("menu-toggle--active");
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "Close navigation menu");
      mobileNav.classList.add("mobile-nav--open");
      mobileNav.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }

    function closeNav() {
      isOpen = false;
      toggle.classList.remove("menu-toggle--active");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation menu");
      mobileNav.classList.remove("mobile-nav--open");
      mobileNav.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }

    toggle.addEventListener("click", function () {
      isOpen ? closeNav() : openNav();
    });

    // Close on link click
    var links = mobileNav.querySelectorAll(".mobile-nav__link");
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("click", closeNav);
    }

    // Close on Escape key
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && isOpen) closeNav();
    });
  }

  /* ── Active Navigation Highlighting ──────────────────── */

  function setupActiveNav() {
    var sections = document.querySelectorAll("section[id]");
    var navLinks = document.querySelectorAll(".nav__link");
    if (!sections.length || !navLinks.length) return;

    function updateActive() {
      var scrollPos = window.scrollY + 120;

      for (var i = sections.length - 1; i >= 0; i--) {
        var section = sections[i];
        if (section.offsetTop <= scrollPos) {
          var activeId = "#" + section.id;
          for (var j = 0; j < navLinks.length; j++) {
            navLinks[j].classList.toggle(
              "nav__link--active",
              navLinks[j].getAttribute("href") === activeId
            );
          }
          break;
        }
      }
    }

    window.addEventListener("scroll", updateActive, { passive: true });
    updateActive();
  }

  /* ── Scroll Reveal Animation ─────────────────────────── */

  function setupScrollReveal() {
    var reveals = document.querySelectorAll(".reveal");
    if (!reveals.length) return;

    // Respect reduced-motion preference
    var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (prefersReducedMotion.matches) {
      for (var i = 0; i < reveals.length; i++) {
        reveals[i].classList.add("reveal--visible");
      }
      return;
    }

    if ("IntersectionObserver" in window) {
      var observer = new IntersectionObserver(
        function (entries) {
          for (var i = 0; i < entries.length; i++) {
            if (entries[i].isIntersecting) {
              entries[i].target.classList.add("reveal--visible");
              observer.unobserve(entries[i].target);
            }
          }
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );

      for (var j = 0; j < reveals.length; j++) {
        observer.observe(reveals[j]);
      }
    } else {
      // Fallback: show all immediately
      for (var k = 0; k < reveals.length; k++) {
        reveals[k].classList.add("reveal--visible");
      }
    }
  }

  /* ── Enquiry Form ────────────────────────────────────── */

  function setupEnquiryForm() {
    var form = document.getElementById("enquiry-form");
    var sendWhatsApp = document.getElementById("form-send-whatsapp");
    var sendEmail = document.getElementById("form-send-email");
    if (!form) return;

    function showError(fieldId, errorId) {
      var field = document.getElementById(fieldId);
      var error = document.getElementById(errorId);
      if (field) field.classList.add("form__input--error", "form__textarea--error", "form__select--error");
      if (error) error.classList.add("form__error--visible");
    }

    function clearError(fieldId, errorId) {
      var field = document.getElementById(fieldId);
      var error = document.getElementById(errorId);
      if (field) field.classList.remove("form__input--error", "form__textarea--error", "form__select--error");
      if (error) error.classList.remove("form__error--visible");
    }

    function clearAllErrors() {
      clearError("form-name", "form-name-error");
      clearError("form-contact", "form-contact-error");
      clearError("form-service", "form-service-error");
    }

    function validate() {
      clearAllErrors();
      var valid = true;

      var name = sanitise(document.getElementById("form-name").value, 100);
      var contact = sanitise(document.getElementById("form-contact").value, 120);
      var service = document.getElementById("form-service").value;

      if (!name || name.length < 2) {
        showError("form-name", "form-name-error");
        valid = false;
      }
      if (!contact || contact.length < 5) {
        showError("form-contact", "form-contact-error");
        valid = false;
      }
      if (!service) {
        showError("form-service", "form-service-error");
        valid = false;
      }

      return valid
        ? {
            name: name,
            contact: contact,
            service: service,
            message: sanitise(document.getElementById("form-message").value, 1000),
          }
        : null;
    }

    function buildEnquiryText(data) {
      var lines = [
        "ENQUIRY FOR HUS MOTORS",
        "━━━━━━━━━━━━━━━━━━━━",
        "Name: " + data.name,
        "Contact: " + data.contact,
        "Service: " + data.service,
      ];
      if (data.message) {
        lines.push("Message: " + data.message);
      }
      lines.push("━━━━━━━━━━━━━━━━━━━━");
      return lines.join("\n");
    }

    // Real-time validation clearing
    var inputs = form.querySelectorAll("input, select, textarea");
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener("input", function () {
        clearAllErrors();
      });
    }

    // Send via WhatsApp
    if (sendWhatsApp) {
      sendWhatsApp.addEventListener("click", function () {
        var data = validate();
        if (!data) return;
        var text = buildEnquiryText(data);
        var url = whatsappURL(text);
        window.open(url, "_blank", "noopener,noreferrer");
      });
    }

    // Send via Email
    if (sendEmail) {
      sendEmail.addEventListener("click", function () {
        var data = validate();
        if (!data) return;

        var email =
          typeof BUSINESS !== "undefined" && BUSINESS.email
            ? BUSINESS.email
            : "Pridetakudzwa74@gmail.com";
        var subject = encodeURIComponent(
          "HUS MOTORS Enquiry — " + data.service
        );
        var body = encodeURIComponent(buildEnquiryText(data));
        window.location.href =
          "mailto:" + email + "?subject=" + subject + "&body=" + body;
      });
    }
  }

  /* ── Footer Year ─────────────────────────────────────── */

  function updateFooterYear() {
    var yearEl = document.getElementById("footer-year");
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  }

  /* ── Smooth Scroll for Safari ────────────────────────── */

  function setupSmoothScroll() {
    var links = document.querySelectorAll('a[href^="#"]');
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("click", function (e) {
        var href = this.getAttribute("href");
        if (href === "#") return;
        var target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          // Update URL without jump
          if (history.pushState) {
            history.pushState(null, null, href);
          }
        }
      });
    }
  }

  /* ── Initialise Everything ───────────────────────────── */

  function init() {
    hydrateFromBusiness();
    setupWhatsAppLinks();
    setupHeaderScroll();
    setupMobileNav();
    setupActiveNav();
    setupScrollReveal();
    setupEnquiryForm();
    updateFooterYear();
    setupSmoothScroll();
  }

  // Run on DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
