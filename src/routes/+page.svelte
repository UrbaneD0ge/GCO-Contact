<script>
  import {onMount} from 'svelte';
  import {enhance} from "$app/forms";
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

  onMount(() => {
    getLocation();
  });
</script>

<div class="center">
<h1>Scan for my Business Card</h1>
<img width="200" src="./blinq-qrcode.png" alt="QR Code">
<p>Or enter your info so I can follow up with you!</p>

<form method="post"
use:enhance={
() => {submitting = true;
return async ({update}) => {await update();
submitting = false;
}
}}
on:submit={
(e) => {e.preventDefault()
}}>
  <div>
    <label for="name">Name:</label><br>
    <input type="text" id="name" name="name" disabled={submitting} validate="required">
  </div>
  <div>
    <label for="email">Email:</label><br>
    <input type="email" id="email" name="email" validate="email" disabled={submitting}>
  </div>
<div>
  <input placeholder="latitude" type="text" name="latitude" id="latitude" bind:value={currentPosition.latitude}><br>
  <input placeholder="longitude" type="text" name="longitude" id="longitude" bind:value={currentPosition.longitude}>
</div>

{#if form?.code === '23505'}
  <p class="message">That email is already signed up!</p>
{/if}

  <!-- SUBMIT BUTTON -->
  <button type="submit">{submitting ? "..." : "Submit" }</button>
</form>

<!-- FORM STATUS ERRORS -->
{#if form?.status === 200}
  <p class="success">Thanks {form.body.name.split(' ')[0]}! We'll reach out to {form.body.email} soon!</p>
{/if}

{#if form?.status === 500}
  <pre class="error">{form.body}</pre>
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