/* Johnson Property Solutions — site behaviour (no framework).
   Handles: mobile menu, "More" dropdown, service-area picker, project filters,
   quote / newsletter / contact forms (FormSubmit relay with mailto fallback). */
(function () {
  "use strict";
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var cfg = window.__SITE || {};
  var MAIL_TO = window.__MAIL_TO || cfg.formMailTo || "timllz83@gmail.com";

  /* Mobile menu */
  var toggle = $(".nav-toggle"), mobile = $(".nav-mobile");
  if (toggle && mobile) {
    toggle.addEventListener("click", function () {
      var open = mobile.hasAttribute("hidden");
      mobile.toggleAttribute("hidden", !open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      var ic = $$("svg", toggle); if (ic.length === 2) { ic[0].toggleAttribute("hidden", open); ic[1].toggleAttribute("hidden", !open); }
    });
  }

  /* "More" dropdown: hover on desktop, click/tap everywhere */
  var wrap = $(".more-wrap"), moreBtn = $(".more-btn"), menu = $(".more-menu");
  if (wrap && moreBtn && menu) {
    var setMore = function (open) {
      menu.toggleAttribute("hidden", !open);
      moreBtn.setAttribute("aria-expanded", open ? "true" : "false");
      var svg = $("svg", moreBtn); if (svg) svg.style.transform = open ? "rotate(180deg)" : "rotate(0deg)";
    };
    wrap.addEventListener("mouseenter", function () { setMore(true); });
    wrap.addEventListener("mouseleave", function () { setMore(false); });
    moreBtn.addEventListener("click", function (e) { e.preventDefault(); setMore(menu.hasAttribute("hidden")); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMore(false); });
  }

  /* Service-area picker */
  var locBtns = $$(".loc-btn"), locImg = $(".loc-img");
  if (locBtns.length && locImg) {
    locBtns.forEach(function (b, i) {
      b.addEventListener("click", function () {
        locBtns.forEach(function (o) { o.style.borderLeftColor = "#E2D9CD"; o.setAttribute("aria-pressed", "false"); });
        b.style.borderLeftColor = "#1E3B2C"; b.setAttribute("aria-pressed", "true");
        if (b.dataset.img) { locImg.src = b.dataset.img; locImg.removeAttribute("srcset"); }
        if (b.dataset.name) locImg.alt = b.dataset.name + " service area";
      });
    });
  }

  /* Project filters */
  var filters = $$(".filter-btn"), projects = $$(".proj");
  if (filters.length && projects.length) {
    filters.forEach(function (f) {
      f.addEventListener("click", function () {
        var v = f.dataset.filter;
        filters.forEach(function (o) { var on = o === f; o.style.background = on ? "#1E3B2C" : "#FFFFFF"; o.style.color = on ? "#FFFFFF" : "#2A2724"; o.setAttribute("aria-pressed", on ? "true" : "false"); });
        projects.forEach(function (p) { p.toggleAttribute("hidden", !(v === "All" || (p.dataset.tags || "").split(" · ").indexOf(v) !== -1)); });
      });
    });
  }

  /* Forms */
  function sendMail(subject, fields) {
    var body = Object.assign({ _subject: subject, _template: "table", _captcha: "false" }, fields);
    return fetch("https://formsubmit.co/ajax/" + MAIL_TO, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(body) })
      .then(function (r) { if (!r.ok) throw new Error(r.status); return true; })
      .catch(function (err) {
        console.warn("Email relay failed, opening mail client", err);
        var text = Object.keys(fields).map(function (k) { return k + ": " + fields[k]; }).join("\n");
        window.open("mailto:" + MAIL_TO + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(text), "_blank");
        return false;
      });
  }
  $$("form[data-form]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var kind = form.dataset.form, btn = $("button[type=submit]", form);
      var fd = new FormData(form), fields = {}; fd.forEach(function (v, k) { fields[k] = v; });
      fields.page = location.pathname;
      if (kind === "contact") {
        sendMail("New quote request from website", fields);
        form.setAttribute("hidden", ""); var thanks = $(".form-thanks"); if (thanks) { thanks.removeAttribute("hidden"); thanks.scrollIntoView({ behavior: "smooth", block: "center" }); }
        return;
      }
      var emailInput = $("input[type=email]", form); if (emailInput) fields.email = emailInput.value;
      sendMail(kind === "news" ? "Newsletter signup" : "Quote request — " + document.title, fields);
      if (btn) { btn.textContent = btn.dataset.done || "Sent"; btn.disabled = true; }
    });
  });

  /* Pre-select service from ?service= links */
  var sel = $("select[name=service]"), svc = new URLSearchParams(location.search).get("service");
  if (sel && svc) { $$("option", sel).forEach(function (o) { if (o.textContent.trim() === svc) sel.value = o.value || o.textContent; }); }
})();
