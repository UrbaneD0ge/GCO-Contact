<script>
  import { fade } from 'svelte/transition';
</script>

  <!-- svelte-ignore element_invalid_self_closing_tag -->
  <div class="loader" transition:fade />

  <style>
    .loader {
      border: 5px solid var(--GCO-blue);
      border-top: 5px solid #ffffff;
      border-radius: 50%;
      width: 15px;
      height: 15px;
      animation: spin 1s linear infinite;
      margin: 5px;
      box-sizing: content-box;
      position: static;
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  </style>