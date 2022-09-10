<template>
  <div class="section contact">
    <h3 class="contact-title">My <span>Contact</span></h3>
    <div class="contact-container">
      <div class="left-container">
        <h4>Contact me here</h4>
        <p>
          The links and the form are currently disabled. Please contact us using
          the information below.
        </p>
        <div class="contact-information">
          <div class="contact-item">
            <div class="icon-cont">
              <font-awesome-icon class="icon" icon="fa-solid fa-location-dot" />
            </div>
            <span class="location">Location: Bayamo, Granma, Cuba</span>
          </div>
          <div class="contact-item">
            <div class="icon-cont">
              <font-awesome-icon class="icon" icon="fa-solid fa-phone" />
            </div>
            <span class="phone">Phone Number: 5354955890</span>
          </div>
          <div class="contact-item">
            <div class="icon-cont">
              <font-awesome-icon class="icon" icon="fa-solid fa-envelope" />
            </div>
            <span class="email">josemanuel94med@gmail.com</span>
          </div>
          <div class="contact-item">
            <div class="icon-cont">
              <font-awesome-icon class="icon" icon="fa-solid fa-language" />
            </div>
            <span class="lang">Languages: Spanish, English</span>
          </div>
        </div>
        <div class="social-media-container">
          <a href="https://wa.me/5354955890" target="_blank">
            <font-awesome-icon class="icon" icon="fa-brands fa-whatsapp" />
          </a>
          <a href="https://t.me/TRUE_ESCANOR" target="_blank">
            <font-awesome-icon class="icon" icon="fa-brands fa-telegram" />
          </a>
          <font-awesome-icon
            @click="alert"
            class="icon"
            icon="fa-brands fa-twitter"
          />
          <a href="https://github.com/iwannatocode" target="_blank">
            <font-awesome-icon class="icon" icon="fa-brands fa-github" />
          </a>
        </div>
      </div>
      <div class="right-container">
        <form action="" class="contact-form">
          <div class="input-control">
            <input type="text" id="name" required placeholder="Your Name" />
            <input type="email" id="email" required placeholder="Your Email" />
            <input
              type="text"
              id="subject"
              required
              placeholder="Enter Subject"
            />
          </div>
          <div class="input-control">
            <textarea
              required
              id="text-area"
              name=""
              cols="25"
              rows="6"
              placeholder="Write your message here ..."
            ></textarea>
          </div>
          <div class="submit-btn-cont">
            <button @click.prevent="validateForm" class="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    alert() {
      alert("We're Sorry, this feature is currently unavailable.");
    },
    validateForm() {
      let name = document.getElementById("name");
      let email = document.getElementById("email");
      let subject = document.getElementById("subject");
      let textArea = document.getElementById("text-area");

      if (
        name.validity.valid &&
        email.validity.valid &&
        subject.validity.valid &&
        textArea.validity.valid
      ) {
        this.alert();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.contact-title {
  text-align: center;
  margin-top: 40px;
  font-size: 34px;
  text-transform: uppercase;
  span {
    color: var(--color-secondary);
  }
}
.contact-container {
  display: flex;
  .left-container {
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    h4 {
      font-size: 24px;
      margin: 30px auto 15px;
    }
    p {
      margin: 0 auto 35px;
      color: red;
      font-size: 19px;
    }
    .contact-item {
      margin: 10px auto;
      display: grid;
      grid-template-columns: 30px auto;
      .icon-cont {
        display: flex;
        align-items: center;
        margin-right: 15px;
      }
    }
    .social-media-container {
      margin-top: 10px;
      .icon {
        cursor: pointer;
        padding: 13px;
        height: 26px;
        width: 26px;
        border-radius: 50%;
        color: var(--color-white);
        &:hover {
          background-color: var(--color-secondary);
          color: black;
        }
      }
    }
  }
  .right-container {
    flex: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .contact-form {
      width: 80%;
      padding: 10px;
      margin-left: 13%;
      .input-control {
        margin: 20px auto;
        input {
          width: 100%;
          font-size: 16px;
          border-radius: 15px;
          padding: 8px 15px;
          outline: 1px solid var(--color-grey-3);
          border: none;
          /*   box-shadow: 1px 2px 8px  rgba(255, 255, 255, 0.152); */
          background-color: var(--color-grey-5);
          color: var(--color-white);
          margin-bottom: 10px;
        }
        textarea {
          width: 100%;
          font-size: 17px;
          resize: none;
          border-radius: 15px;
          padding: 10px;
          background-color: var(--color-grey-5);
          color: var(--color-white);
          outline: none;
        }
      }
      .submit-btn-cont {
        display: flex;
        justify-content: flex-end;
        .submit {
          cursor: pointer;
          padding: 7px;
          border-radius: 10px;
          width: 120px;
          background-color: var(--color-black-2);
          color: var(--color-white);
          transition: all 0.4s ease-in-out;
          font-weight: 700;
          &:hover {
            background-color: var(--color-white);
            color: var(--color-black-1);
            font-weight: 700;
          }
        }
      }
    }
  }
}
</style>
