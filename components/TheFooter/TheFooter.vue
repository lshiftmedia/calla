<template>
  <footer class="site-info" role="contentinfo">
    <div class="footer-content">
      <nuxt-link to="/"><img src="../../assets/calla_logo.png" class="footer-logo" title="Calla Law" ></nuxt-link>
        <div class="site-details">
          <ul class="site-legal">
            <li class="copyright">
              ©{{ new Date().getFullYear() }} Calla Legal All rights reserved
            </li>

            <li class="legal-link">
              <a class="link muted" href="mailto:naomi@callalegal.ca">naomi@callalegal.ca</a>
            </li>
            <li class="legal-link">
              <a class="link muted" href="tel:416-804-6303">416-804-6303</a>
            </li>

          </ul>
        </div>
    </div>
  </footer>
</template>
