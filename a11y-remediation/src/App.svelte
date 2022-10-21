<script>
  import rkvLogo from './assets/RKVlogofinal_full color horz.png'
  import rkvLogoDark from './assets/RKVlogofinal_for dark backgrounds.png'
  import Contrast from './lib/Contrast.svelte';
  import TabOrder from './lib/TabOrder.svelte';
  import FocusOutline from './lib/FocusOutline.svelte';
    import AltText from './lib/AltText.svelte';
    import LinkText from './lib/LinkText.svelte';
</script>

<main>
  <div>
    <a href="https://reaktiv.co" aria-label="Go to ReaktivStudios site."> 
      <img src={rkvLogo} class="logo logo__rkv" />
      <!-- <img src={rkvLogo} class="logo logo__rkv" alt="ReaktivStudios Logo: Yellow stylized lighbulb representing bright ideas next to the text `Reaktiv Studios`." /> -->
    </a>
  </div>
  <h1>Accessiblity Remediation Demo</h1>
  <Contrast />
  <TabOrder />
  <FocusOutline />
  <AltText />
  <LinkText />
</main>
