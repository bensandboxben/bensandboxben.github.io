
/* Ventus International page interactions. */
(function () {
  "use strict";

  function ready(callback) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback, { once: true });
    } else {
      callback();
    }
  }

  ready(function () {
    const vacancySection = document.getElementById("vacancies-section");
    const enquiryForm = document.getElementById("recruitment-enquiry-form");

    /*
     * Vacancy search and market filters.
     * The HTML currently provides sample vacancies, so filtering operates
     * on those cards without making a request or implying that jobs are live.
     */
    if (vacancySection) {
      const searchInput = vacancySection.querySelector('input[type="text"]');

      const filterButtons = Array.from(
        vacancySection.querySelectorAll(
          ".flex.items-center.gap-2.overflow-x-auto button"
        )
      );

      const vacancyGrid = vacancySection.querySelector(".grid.gap-6");

      /*
       * Find vacancy cards from their headings.
       * This avoids relying on a specific card position in the page.
       */
      const headings = Array.from(vacancySection.querySelectorAll("h4"));

      const vacancyCards = headings
        .map(function (heading) {
          return heading.closest(".bg-white.border");
        })
        .filter(Boolean);

      let activeFilter = "all";

      const filterTerms = {
        "offshore wind": ["offshore", "wind"],
        "solar pv": ["solar", "pv"],
        "battery storage": ["battery", "bess", "storage"],
        "grid & hv": ["grid", "hv", "substation"],
        executive: ["executive", "chief", "director"]
      };

      function filterVacancies() {
        const term = searchInput
          ? searchInput.value.trim().toLowerCase()
          : "";

        let visibleCount = 0;

        vacancyCards.forEach(function (card) {
          const cardText = card.textContent.toLowerCase();

          const matchesSearch =
            !term || cardText.includes(term);

          const terms = filterTerms[activeFilter] || [activeFilter];

          const matchesFilter =
            activeFilter === "all" ||
            terms.some(function (word) {
              return cardText.includes(word);
            });

          const visible = matchesSearch && matchesFilter;

          card.hidden = !visible;

          if (visible) {
            visibleCount += 1;
          }
        });

        let emptyMessage = vacancySection.querySelector(
          "[data-vacancy-empty]"
        );

        if (!emptyMessage && vacancyGrid) {
          emptyMessage = document.createElement("p");

          emptyMessage.setAttribute(
            "data-vacancy-empty",
            ""
          );

          emptyMessage.className =
            "col-span-full rounded-xl border border-[#DCE3EA] bg-white p-6 text-center text-[#526174]";

          emptyMessage.textContent =
            "No vacancies match your search. Try another keyword or market.";

          vacancyGrid.appendChild(emptyMessage);
        }

        if (emptyMessage) {
          emptyMessage.hidden = visibleCount > 0;
        }
      }

      /*
       * Market filter buttons.
       */
      filterButtons.forEach(function (button) {
        button.addEventListener("click", function () {
          const label = button.textContent
            .trim()
            .toLowerCase();

          activeFilter =
            label === "all markets"
              ? "all"
              : label;

          filterButtons.forEach(function (item) {
            const selected = item === button;

            item.classList.toggle(
              "bg-[#336699]",
              selected
            );

            item.classList.toggle(
              "text-white",
              selected
            );

            item.classList.toggle(
              "shadow-sm",
              selected
            );

            item.classList.toggle(
              "bg-[#F5F7FA]",
              !selected
            );

            item.classList.toggle(
              "text-[#526174]",
              !selected
            );

            item.setAttribute(
              "aria-pressed",
              selected ? "true" : "false"
            );
          });

          filterVacancies();
        });
      });

      /*
       * Search vacancies as the user types.
       */
      if (searchInput) {
        searchInput.addEventListener(
          "input",
          filterVacancies
        );
      }

      /*
       * Apply the initial vacancy display.
       */
      filterVacancies();
    }

    /*
     * Recruitment enquiry form.
     *
     * This is a client-side demonstration only.
     * It does not send form data to a server or email address.
     */
    if (enquiryForm) {
      enquiryForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!enquiryForm.checkValidity()) {
          enquiryForm.reportValidity();
          return;
        }

        window.alert(
          "Thank you for contacting Ventus International. An Edinburgh director will follow up shortly."
        );

        enquiryForm.reset();
      });
    }

    /*
     * Replace placeholder links with section destinations.
     */
    const pathTargets = {
      home: "top",
      services: "services-overview",
      "renewable-markets": "services-overview",
      vacancies: "vacancies-section",
      "about-ventus": "executive-spotlight",
      "market-insights": "market-insights",
      contact: "client-enquiry",
      "client-enquiry": "client-enquiry",
      "privacy-policy": "client-enquiry",
      "cookie-policy": "client-enquiry",
      "terms-of-business": "client-enquiry"
    };

    document
      .querySelectorAll("a[data-path]")
      .forEach(function (link) {
        const path = link.getAttribute("data-path");

        const target = pathTargets[path];

        if (
          target &&
          link.getAttribute("href") === "#"
        ) {
          link.setAttribute(
            "href",
            target === "top"
              ? "#"
              : "#" + target
          );
        }
      });
  });
})();
