<script lang="ts">
  import { SectionHeadline, Button } from "$components";
  import { Status } from "$types";

  let formState = $state({
    name: "",
    email: "",
    message: "",
  });
  let isFormInvalid: boolean = $state(false);
  let status: Status = $state(Status.IDLE);

  async function onsubmit(event: SubmitEvent) {
    event.preventDefault();

    if (!formState.name || !formState.email || !formState.message) {
      isFormInvalid = true;
    }

    status = Status.LOADING;
    const response = await fetch("/api/send-mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    });
    status = Status.IDLE;

    if (!response.ok) {
      status = Status.ERROR;
    }

    if (response.ok) {
      status = Status.SUCCESS;
    }

    console.log(response);
  }

  $effect(() => {
    if (formState.email || formState.name || formState.message) {
      isFormInvalid = false;
    }
  });
</script>

<section>
  <SectionHeadline sectionName="contact-form">Let's talk</SectionHeadline>

  <div class="form-container default-margin mt-m">
    {#if status === Status.SUCCESS}
      <div class="spinner-container">
        <h3>
          Thank you for getting in contact with me. I'll get back to you soon.
        </h3>
      </div>
    {:else if status === Status.LOADING}
      <div class="spinner-container">
        <div class="spinner"></div>
        <h3>Sending off the contact form.</h3>
      </div>
    {:else if status === Status.ERROR}
      <h3>
        We seem to have trouble with our server at the moment. Please send an
        email directly <a class="link" href="mailto:mian.lopezjimenez@gmail.com"
          >mian.lopezjimenez@gmail.com</a
        >
      </h3>
    {:else}
      <form {onsubmit}>
        <input
          class="text-input mb-m"
          class:input-error={isFormInvalid && !Boolean(formState.name)}
          type="text"
          bind:value={formState.name}
          placeholder="Your name"
        />
        <input
          class="text-input mb-m"
          class:input-error={isFormInvalid && !Boolean(formState.email)}
          type="email"
          bind:value={formState.email}
          placeholder="Your email"
        />
        <textarea
          class="text-input"
          class:input-error={isFormInvalid && !Boolean(formState.message)}
          bind:value={formState.message}
          placeholder="Tell me what's up."
        ></textarea>

        <Button type="submit">Submit</Button>
      </form>
    {/if}

    <div class="form-text">
      <h3 class="bold mb-s">Talk to me about your project</h3>
      <p>
        I'm always excited to hear about new and innovative ideas! Whether
        you're in the early stages of planning or have a well-defined project,
        I'm here to help bring your vision to life. Feel free to drop me a
        message with some details about your project, and let's start a
        conversation about how we can work together. I look forward to
        connecting with you and discussing the possibilities. Talk to you soon!
      </p>
    </div>
  </div>

  <!-- <div class="spinner"></div> -->
</section>

<style>
  section {
    padding-bottom: 140px;
  }

  .form-container {
    display: flex;
    justify-content: space-between;
  }

  .form-text {
    width: 39%;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 45%;
  }

  form * {
    font-size: 20px;
    font-family: "Inter Tight", sans-serif;
    font-weight: 500;
    color: black;
  }

  textarea,
  input {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.035);
    border-radius: 8px;
    padding: 4px 12px;
    outline: none;
    border: none;
  }

  input {
    height: 48px;
  }

  textarea {
    height: 120px;
    margin-bottom: 40px;
  }

  textarea::placeholder,
  input::placeholder {
    font-size: 20px;
    font-weight: 400;
  }

  .input-error {
    background-color: rgba(223, 87, 87, 0.667);
  }

  .input-error::placeholder {
    color: white;
  }

  .spinner {
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-left-color: black;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    display: inline-block;
    margin-right: 8px;
    animation: spin 1s linear infinite;
  }

  .spinner-container {
    display: flex;
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
