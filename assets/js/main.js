/**
 * ============================================================
 *  HUS MOTORS — Main Client-Side JavaScript
 * ============================================================
 *  Handles:
 *  - Vehicle inventory rendering & dynamic category filtering
 *  - Vehicle details modal
 *  - Direct WhatsApp URL generation with tailored pre-filled messages
 *  - Contact & enquiry form with validation (WhatsApp & Email options)
 *  - Dynamic data hydration from src/data/business.js & src/data/vehicles.js
 *  - Mobile navigation drawer & accessible keyboard controls
 *  - Scroll reveal animations with reduced-motion support
 * ============================================================
 *  Zero third-party tracking. Zero external library dependencies.
 * ============================================================
 */

(function () {
  "use strict";

  /* ── 1. Helpers ──────────────────────────────────────────── */

  /**
   * Build a WhatsApp URL with a pre-filled, URL-encoded message.
   */
  function getWhatsAppNumber() {
    return (typeof BUSINESS !== "undefined" && BUSINESS.whatsappNumber)
      ? BUSINESS.whatsappNumber
      : "263778891162";
  }

  function whatsappURL(message) {
    var num = getWhatsAppNumber();
    var encoded = encodeURIComponent(message || "Hello HUS MOTORS, I would like to enquire about your automotive services.");
    return "https://wa.me/" + num + "?text=" + encoded;
  }

  function setHref(id, url) {
    var el = document.getElementById(id);
    if (el) el.href = url;
  }

  function sanitise(str, maxLen) {
    if (!str) return "";
    var clean = str.replace(/<[^>]*>/g, "").trim();
    return clean.substring(0, maxLen || 500);
  }

  /* ── 2. Business Data Hydration ────────────────────────── */

  function hydrateBusinessData() {
    if (typeof BUSINESS === "undefined") return;

    // Contact Phone
    if (BUSINESS.phone) {
      var phoneClean = BUSINESS.phone.replace(/\s+/g, "");
      var phoneEls = [
        document.getElementById("contact-phone-link"),
        document.getElementById("footer-phone-link"),
        document.getElementById("towing-phone-link")
      ];
      for (var p = 0; p < phoneEls.length; p++) {
        if (phoneEls[p]) {
          phoneEls[p].textContent = BUSINESS.phoneDisplay || BUSINESS.phone;
          phoneEls[p].href = "tel:" + phoneClean;
        }
      }
      var callBtns = [
        document.getElementById("contact-call-btn"),
        document.getElementById("towing-call-btn")
      ];
      for (var c = 0; c < callBtns.length; c++) {
        if (callBtns[c]) callBtns[c].href = "tel:" + phoneClean;
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
      if (emailBtn) emailBtn.href = "mailto:" + BUSINESS.email;
    }

    // Location
    if (BUSINESS.city) {
      var fullLoc = [BUSINESS.city, BUSINESS.country].filter(Boolean).join(", ");
      var locItem = document.getElementById("contact-location-item");
      var locText = document.getElementById("contact-address-text");
      if (locItem && locText) {
        locText.textContent = fullLoc + (BUSINESS.addressNote ? " (" + BUSINESS.addressNote + ")" : "");
        locItem.style.display = "flex";
      }
      var footerLoc = document.getElementById("footer-location-item");
      var footerLocText = document.getElementById("footer-address-text");
      if (footerLoc && footerLocText) {
        footerLocText.textContent = fullLoc;
        footerLoc.style.display = "flex";
      }
    }

    // Opening Hours
    if (BUSINESS.openingHours) {
      var hoursItem = document.getElementById("contact-hours-item");
      var hoursText = document.getElementById("contact-hours-text");
      if (hoursItem && hoursText) {
        hoursText.textContent = BUSINESS.openingHours;
        hoursItem.style.display = "flex";
      }
    }

    // Global WhatsApp Buttons
    var defaultMsg = "Hello HUS MOTORS, I would like to enquire about your vehicles and automotive services.";
    var defaultURL = whatsappURL(defaultMsg);

    setHref("nav-whatsapp-btn", defaultURL);
    setHref("mobile-nav-whatsapp-btn", defaultURL);
    setHref("hero-whatsapp-btn", defaultURL);
    setHref("contact-whatsapp-btn", defaultURL);
    setHref("cta-whatsapp-btn", defaultURL);
    setHref("floating-whatsapp-btn", defaultURL);
    setHref("sourcing-whatsapp-btn", whatsappURL("Hello HUS MOTORS, I am looking for a specific vehicle. Here are the make, model, year, and budget I have in mind:"));
    setHref("towing-whatsapp-btn", whatsappURL("Hello HUS MOTORS, I need towing / roadside recovery assistance. My vehicle details and current location are:"));
    setHref("sell-car-whatsapp-btn", whatsappURL("Hello HUS MOTORS, I want to sell my vehicle. Here are the details and condition:"));
  }

  /* ── 3. Vehicle Inventory Management & Rendering ───────── */

  var activeCategory = "all";
  var currentVehicles = [];

  function getVehicleList() {
    // Check if in preview mode via query parameter (e.g. index.html?preview=true)
    var isPreview = window.location.search.indexOf("preview=true") !== -1;
    if (isPreview) {
      var stored = localStorage.getItem("hus_motors_vehicles_draft");
      if (stored) {
        try {
          return JSON.parse(stored);
        } catch (e) {
          console.warn("Failed to parse local draft vehicles, falling back to static VEHICLES.");
        }
      }
    }
    return (typeof VEHICLES !== "undefined" && Array.isArray(VEHICLES)) ? VEHICLES : [];
  }

  function renderVehicles() {
    var container = document.getElementById("vehicles-grid");
    if (!container) return;

    currentVehicles = getVehicleList();

    var filtered = activeCategory === "all"
      ? currentVehicles
      : currentVehicles.filter(function (v) {
          if (activeCategory === "wagon") return v.category === "wagon" || v.category === "hatchback";
          return v.category === activeCategory;
        });

    if (!filtered.length) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 48px; text-align: center; background: var(--color-bg-card); border-radius: var(--radius-lg); border: 1px solid var(--color-border);">
          <h3 style="font-family: var(--font-heading); color: #fff; margin-bottom: 8px;">No vehicles currently matching this category</h3>
          <p style="color: var(--color-text-secondary); margin-bottom: 20px;">We regularly update our vehicle stock. Contact HUS MOTORS directly to ask about upcoming arrivals or request a specific vehicle.</p>
          <a href="${whatsappURL("Hello HUS MOTORS, I am looking for a specific vehicle in the category: " + activeCategory)}" target="_blank" rel="noopener noreferrer" class="btn btn--whatsapp btn--sm">Ask on WhatsApp</a>
        </div>
      `;
      return;
    }

    var html = "";
    for (var i = 0; i < filtered.length; i++) {
      var v = filtered[i];
      var badgeClass = "v-card__badge--available";
      var badgeText = v.statusLabel || "Available";

      if (v.status === "reserved") {
        badgeClass = "v-card__badge--reserved";
        badgeText = "Reserved / In Transit";
      } else if (v.status === "sold") {
        badgeClass = "v-card__badge--sold";
        badgeText = "Sold";
      }

      var imgWebp = v.image || "assets/images/vehicles/corolla.webp";
      var imgJpg = v.imageFallback || imgWebp.replace(".webp", ".jpg");

      var whatsappMsg = "Hello HUS MOTORS, I am enquiring about the " + v.title + " (" + (v.price || "Price on enquiry") + ") listed on your website. Is it available?";
      var cardWaUrl = whatsappURL(whatsappMsg);

      html += `
        <article class="v-card reveal" data-category="${v.category || "sedan"}" id="vehicle-${v.id || i}">
          <div class="v-card__media">
            <picture>
              <source srcset="${imgWebp}" type="image/webp">
              <img src="${imgJpg}" alt="${v.title} — HUS MOTORS vehicle stock" loading="lazy" width="600" height="375">
            </picture>
            <span class="v-card__badge ${badgeClass}">${badgeText}</span>
          </div>
          <div class="v-card__body">
            <div class="v-card__category">${v.categoryLabel || "Verified Vehicle"}</div>
            <h3 class="v-card__title">${v.title}</h3>
            
            <div class="v-card__specs">
              <span class="v-spec-chip">${v.year}</span>
              <span class="v-spec-chip">${v.transmission || "Automatic"}</span>
              <span class="v-spec-chip">${v.fuel || "Petrol"}</span>
              <span class="v-spec-chip">${v.mileage || "Verified Condition"}</span>
            </div>

            <p class="v-card__desc">${v.description || "Clean, well-maintained vehicle with verified mechanical condition and transparent service history."}</p>

            <div class="v-card__footer">
              <div class="v-card__price">
                ${v.price || "Enquire"} <span>USD</span>
              </div>
              <div style="display: flex; gap: 8px;">
                <button type="button" class="btn btn--ghost btn--sm" onclick="openVehicleDetails('${v.id || i}')" aria-label="View details for ${v.title}">
                  Details
                </button>
                <a href="${cardWaUrl}" target="_blank" rel="noopener noreferrer" class="btn btn--whatsapp btn--sm" aria-label="Enquire about ${v.title} on WhatsApp">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Enquire
                </a>
              </div>
            </div>
          </div>
        </article>
      `;
    }

    container.innerHTML = html;
    setupScrollReveal();
  }

  function setupCategoryFilters() {
    var filterBtns = document.querySelectorAll(".filter-btn");
    for (var i = 0; i < filterBtns.length; i++) {
      filterBtns[i].addEventListener("click", function () {
        for (var j = 0; j < filterBtns.length; j++) {
          filterBtns[j].classList.remove("filter-btn--active");
        }
        this.classList.add("filter-btn--active");
        activeCategory = this.getAttribute("data-category") || "all";
        renderVehicles();
      });
    }
  }

  /* ── 4. Vehicle Details Modal Popup ────────────────────── */

  window.openVehicleDetails = function (vehicleId) {
    var v = currentVehicles.find(function (item, idx) {
      return item.id === vehicleId || String(idx) === String(vehicleId);
    });

    if (!v) return;

    var modal = document.getElementById("vehicle-details-modal");
    if (!modal) return;

    document.getElementById("v-modal-title").textContent = v.title;
    document.getElementById("v-modal-category").textContent = v.categoryLabel || "Verified Vehicle";
    document.getElementById("v-modal-price").textContent = (v.price || "Enquire") + " USD";
    document.getElementById("v-modal-year").textContent = v.year || "—";
    document.getElementById("v-modal-mileage").textContent = v.mileage || "Clean condition";
    document.getElementById("v-modal-trans").textContent = v.transmission || "Automatic";
    document.getElementById("v-modal-fuel").textContent = v.fuel || "Petrol";
    document.getElementById("v-modal-engine").textContent = v.engine || "Standard factory spec";
    document.getElementById("v-modal-color").textContent = v.color || "Standard exterior";
    document.getElementById("v-modal-desc").textContent = v.description || "";

    var img = document.getElementById("v-modal-img");
    if (img) {
      img.src = v.image || v.imageFallback || "assets/images/vehicles/corolla.jpg";
      img.alt = v.title;
    }

    var featuresList = document.getElementById("v-modal-features");
    if (featuresList) {
      var fHtml = "";
      if (Array.isArray(v.features) && v.features.length) {
        for (var f = 0; f < v.features.length; f++) {
          fHtml += `
            <li style="display: flex; align-items: center; gap: 8px; font-size: 0.88rem; color: var(--color-text-secondary); margin-bottom: 6px;">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              ${v.features[f]}
            </li>
          `;
        }
      } else {
        fHtml = '<li style="color: #888; font-size: 0.85rem;">Inspected, road-worthy condition with standard manufacturer features.</li>';
      }
      featuresList.innerHTML = fHtml;
    }

    var waBtn = document.getElementById("v-modal-whatsapp-btn");
    if (waBtn) {
      var waMsg = "Hello HUS MOTORS, I am interested in the " + v.title + " (" + (v.price || "Price on enquiry") + "). Please share availability and inspection details.";
      waBtn.href = whatsappURL(waMsg);
    }

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  window.closeVehicleDetails = function () {
    var modal = document.getElementById("vehicle-details-modal");
    if (modal) modal.classList.remove("active");
    document.body.style.overflow = "";
  };

  function setupModalEvents() {
    var modal = document.getElementById("vehicle-details-modal");
    if (!modal) return;

    modal.addEventListener("click", function (e) {
      if (e.target === modal) window.closeVehicleDetails();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") window.closeVehicleDetails();
    });
  }

  /* ── 5. Header Scroll & Mobile Navigation ───────────────── */

  function setupHeaderScroll() {
    var header = document.getElementById("header");
    if (!header) return;

    function checkScroll() {
      header.classList.toggle("header--scrolled", window.scrollY > 40);
    }

    window.addEventListener("scroll", checkScroll, { passive: true });
    checkScroll();
  }

  function setupMobileNav() {
    var toggle = document.getElementById("menu-toggle");
    var mobileNav = document.getElementById("mobile-nav");
    if (!toggle || !mobileNav) return;

    var isOpen = false;

    function openNav() {
      isOpen = true;
      toggle.classList.add("menu-toggle--active");
      toggle.setAttribute("aria-expanded", "true");
      mobileNav.classList.add("mobile-nav--open");
      mobileNav.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }

    function closeNav() {
      isOpen = false;
      toggle.classList.remove("menu-toggle--active");
      toggle.setAttribute("aria-expanded", "false");
      mobileNav.classList.remove("mobile-nav--open");
      mobileNav.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }

    toggle.addEventListener("click", function () {
      isOpen ? closeNav() : openNav();
    });

    var links = mobileNav.querySelectorAll(".mobile-nav__link");
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("click", closeNav);
    }

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && isOpen) closeNav();
    });
  }

  /* ── 6. Active Nav Link Highlighting ─────────────────────── */

  function setupActiveNav() {
    var sections = document.querySelectorAll("section[id]");
    var navLinks = document.querySelectorAll(".nav__link");
    if (!sections.length || !navLinks.length) return;

    function updateActive() {
      var scrollPos = window.scrollY + 140;
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

  /* ── 7. Scroll Reveal Animation ──────────────────────────── */

  function setupScrollReveal() {
    var reveals = document.querySelectorAll(".reveal:not(.reveal--visible)");
    if (!reveals.length) return;

    var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (prefersReduced.matches) {
      for (var r = 0; r < reveals.length; r++) {
        reveals[r].classList.add("reveal--visible");
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
        { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
      );

      for (var j = 0; j < reveals.length; j++) {
        observer.observe(reveals[j]);
      }
    } else {
      for (var k = 0; k < reveals.length; k++) {
        reveals[k].classList.add("reveal--visible");
      }
    }
  }

  /* ── 8. Fast Enquiry Form Handling ───────────────────────── */

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
      var message = sanitise(document.getElementById("form-message").value, 1000);

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

      return valid ? { name: name, contact: contact, service: service, message: message } : null;
    }

    function buildEnquiryText(data) {
      var lines = [
        "ENQUIRY FOR HUS MOTORS",
        "────────────────────────",
        "Name: " + data.name,
        "Contact: " + data.contact,
        "Service: " + data.service
      ];
      if (data.message) {
        lines.push("Details / Message: " + data.message);
      }
      lines.push("────────────────────────");
      lines.push("Sent via husmotors.co.zw");
      return lines.join("\n");
    }

    var inputs = form.querySelectorAll("input, select, textarea");
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener("input", clearAllErrors);
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
        var email = (typeof BUSINESS !== "undefined" && BUSINESS.email)
          ? BUSINESS.email
          : "Pridetakudzwa74@gmail.com";
        var subject = encodeURIComponent("HUS MOTORS Enquiry — " + data.service);
        var body = encodeURIComponent(buildEnquiryText(data));
        window.location.href = "mailto:" + email + "?subject=" + subject + "&body=" + body;
      });
    }
  }

  /* ── 9. Smooth Scroll ────────────────────────────────────── */

  function setupSmoothScroll() {
    var links = document.querySelectorAll('a[href^="#"]');
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("click", function (e) {
        var href = this.getAttribute("href");
        if (href === "#" || href.length < 2) return;
        var target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          if (history.pushState) {
            history.pushState(null, null, href);
          }
        }
      });
    }
  }

  /* ── 10. Initialise Everything ───────────────────────────── */

  function init() {
    hydrateBusinessData();
    renderVehicles();
    setupCategoryFilters();
    setupModalEvents();
    setupHeaderScroll();
    setupMobileNav();
    setupActiveNav();
    setupScrollReveal();
    setupEnquiryForm();
    setupSmoothScroll();

    var yearEl = document.getElementById("footer-year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
