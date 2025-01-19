<script>
  import {onMount} from 'svelte';
  import {enhance} from "$app/forms";
  import { fade } from 'svelte/transition';
  import Loader from '$lib/components/Loader.svelte';
  export let form;
  let currentPosition = { latitude: 0, longitude: 0 };
  let submitting = false;

  function getLocation() {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log('Latitude: ' + position.coords.latitude);
        console.log('Longitude: ' + position.coords.longitude);
          currentPosition = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
          };
      });
  }

// If there is a form message, clear it after 5 seconds
</script>
{#if form?.status}
<span style="display: none;">
{setTimeout(() => {
  form = '';
}, 3000)}</span>
{/if}

<div class="center">
<h1>Scan for my Business Card</h1>
<img width="200" src="./aaron-qrcode.png" alt="Aaron's QR Code">
<p>Or enter your info so I can follow up with you!</p>

<form method="post"
use:enhance={
() => {submitting = true;
  getLocation();
  return async ({update}) => {
    await update({ reset: true });
    submitting = false;
  };
}}>
  <div>
    <label for="name">Name:</label><br>
    <input type="text" id="name" name="name" disabled={submitting} validate="required" required>
  </div>
  <div>
    <label for="email">Email:</label><br>
    <input type="email" id="email" name="email" validate="email" disabled={submitting} required>
  </div>
<div style="display:none;">
  <input placeholder="latitude" type="hidden" name="latitude" id="latitude" bind:value={currentPosition.latitude}><br>
  <input placeholder="longitude" type="hidden" name="longitude" id="longitude" bind:value={currentPosition.longitude}>
</div>

{#if form?.code === '23505'}
  <p class="message">That email is already signed up!</p>
{/if}

  <!-- SUBMIT BUTTON -->
  <button type="submit" disabled={submitting}>
    {#if submitting}
      <Loader/>
    {:else}
      Submit
    {/if}
  </button>
</form>

<!-- FORM STATUS ERRORS -->
{#if form?.status && form?.status === 200}
  <p class="success" style="text-align: center;" transition:fade>Thanks {form?.name.split(' ')[0]}!<br>We'll reach out to {form?.email} soon!</p>
{/if}

{#if form?.status && form?.status === 500}
  <pre class="error" transition:fade>{form?.body}</pre>
{/if}
</div>

<style>
  .message {
    margin: 0;
    color: var(--GCO-orange);
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 15px;
  }

  label {
    font-size: 1.25rem;
  }

  input {
    font-size: 1.25rem;
    padding: 0.5rem;
    border: 1px solid #8b8b8b;
    border-radius: 5px;
  }

  button {
    font-size: 1.25rem;
    padding: 0.5rem;
    color: #8b8b8b;
    background-color: var(--GCO-greenTransp);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    justify-content: center;
  }

  button:hover {
    color: black;
    background-color: var(--GCO-green);
  }

  .center {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .success {
    color: var(--GCO-green);
  }

  .error {
    color: var(--GCO-orange);
  }

  img {
    border: 8px double var(--GCO-blue);
    border-radius: 20px;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 1.5rem;
      margin: 10px;
    }
    form {
      margin: 10px;
      gap: 0.5rem;
    }
  }
</style>