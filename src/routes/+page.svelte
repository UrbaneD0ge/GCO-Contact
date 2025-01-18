<script>
  import {enhance} from "$app/forms";
  export let data, form;
</script>

<div>
<h1>Scan for my Business Card</h1>
<img width="200" style="margin: 30px;" src="./blinq-qrcode.png" alt="QR Code">
<p>Or enter your info so I can follow up with you!</p>
<br>

<form method="post" use:enhance>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
  <label for="email">Email:</label>
  <input type="email" id="email" name="email">
  <button type="submit">Submit</button>
</form>
</div>


<style>
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 30px;
  }

  label {
    font-size: 1.25rem;
  }

  input {
    font-size: 1.25rem;
    padding: 0.5rem;
  }

  button {
    font-size: 1.25rem;
    padding: 0.5rem;
    background-color: #f0f0f0;
    border: none;
    cursor: pointer;
  }

  button:hover {
    background-color: #8dc63f;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    border: 8px double #fbaf3f;
    border-radius: 20px;
  }
</style>