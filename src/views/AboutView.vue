<template>
  <div class="section about">
    <div class="main-title">
      <h2>About <span>me</span></h2>
    </div>
    <div class="about-container">
      <div class="left-about">
        <h3>Information about me</h3>
        <p class="text-about-me">
          I'm a web developer, I love to create beautiful and functional
          websites. I don't feel comfortable until I find the solution in some
          project, so I usually refresh my head and then work on it. I always
          like to give my point of view on how to carry out an idea, and I
          accept all kinds of suggestions, as long as it helps me in my work,
          either by simplifying the code, improving performance or the user
          interface. I like to learn from others and review ingenious solutions.
          Also study new technologies that help me in my projects.
        </p>
      </div>
      <div class="right-about">
        <div class="items">
          <div class="items-number">20+</div>
          <div class="items-text">Poject<br />Completed</div>
        </div>
        <div class="items">
          <div class="items-number">10+</div>
          <div class="items-text">Happy<br />Client</div>
        </div>
        <div class="items">
          <div class="items-number">2+</div>
          <div class="items-text">Year<br />Experince</div>
        </div>
        <div class="items">
          <div class="items-number">20+</div>
          <div class="items-text">customer<br />Reviews</div>
        </div>
      </div>
    </div>
    <div class="stats">
      <div class="stats-title">My Stats</div>
      <div class="progress-bar-container">
        <div class="progress-bar">
          <p class="bar-title">html</p>
          <div class="bar">
            <p class="bar-perct">75%</p>
            <div class="progress">
              <span class="html"></span>
            </div>
          </div>
        </div>
        <div class="progress-bar">
          <p class="bar-title">css</p>
          <div class="bar">
            <p class="bar-perct">60%</p>
            <div class="progress">
              <span class="css"></span>
            </div>
          </div>
        </div>
        <div class="progress-bar">
          <p class="bar-title">Java Script</p>
          <div class="bar">
            <p class="bar-perct">75%</p>
            <div class="progress">
              <span class="js"></span>
            </div>
          </div>
        </div>
        <div class="progress-bar">
          <p class="bar-title">Vue</p>
          <div class="bar">
            <p class="bar-perct">50%</p>
            <div class="progress">
              <span class="vue"></span>
            </div>
          </div>
        </div>
        <div class="progress-bar">
          <p class="bar-title">Quasar</p>
          <div class="bar">
            <p class="bar-perct">30%</p>
            <div class="progress">
              <span class="quasar"></span>
            </div>
          </div>
        </div>
        <div class="progress-bar">
          <p class="bar-title">English</p>
          <div class="bar">
            <p class="bar-perct">55%</p>
            <div class="progress">
              <span class="english"></span>
            </div>
          </div>
        </div>
        <div class="progress-bar">
          <p class="bar-title">TypeScript</p>
          <div class="bar">
            <p class="bar-perct">30%</p>
            <div class="progress">
              <span class="ts"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main-title {
  text-align: center;
  padding: 40px;
  margin-left: 2%;
  h2 {
    text-transform: uppercase;
    font-size: 34px;
    span {
      color: var(--color-secondary);
    }
  }
}
.about-container {
  display: grid;
  grid-template-columns: 50% 50%;
  .left-about {
    padding-right: 40px;
    h3 {
      font-size: 23px;
      text-transform: uppercase;
    }
    p {
      margin-top: 25px;
      color: var(--color-grey-1);
    }
  }
  .right-about {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 25px;
    padding-right: 30px;
    .items {
      border: 1px solid rgba(89, 87, 87, 0.244);
      box-shadow: 1px 2px 15px rgba(0, 0, 0, 0.117);
      transition: all 0.4s ease-in-out;
      cursor: default;
      &:hover {
        border: 1px solid var(--color-secondary);
        box-shadow: 1px 4px 15px rgba(0, 0, 0, 0.483);
        transform: translateY(-7%);
        & .items-text {
          color: var(--color-grey-1);
        }
      }
      .items-number {
        margin-top: 25px;
        font-size: 30px;
        font-weight: 700;
        color: var(--color-secondary);
        text-align: center;
      }
      .items-text {
        position: relative;
        font-size: 15px;
        margin: 20px 0;
        text-transform: uppercase;
        letter-spacing: 2px;
        color: var(--color-grey-2);
        padding-left: 34px;
        &::before {
          content: "";
          position: absolute;
          top: 12px;
          left: 7px;
          width: 16px;
          height: 2px;
          background-color: var(--color-grey-4);
        }
      }
    }
  }
}
.stats-title {
  text-align: center;
  margin: 70px 10px 25px;
  text-transform: uppercase;
  font-size: 20px;
}
.progress-bar-container {
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 25px;
  margin-bottom: 60px;
  .bar-title {
    text-transform: uppercase;
    margin-bottom: 5px;
  }
  .bar {
    display: flex;
    align-items: center;
    .progress {
      position: relative;
      width: 100%;
      height: 7px;
      margin-left: 10px;
      border-radius: 5px;
      background-color: var(--color-grey-4);
      span {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 0%;
        border-radius: 5px;
        background-color: var(--color-secondary);
        z-index: 4;
      }
      .html {
        width: 75% !important;
      }
      .css {
        width: 60% !important;
      }
      .js {
        width: 75% !important;
      }
      .quasar {
        width: 30% !important;
      }
      .vue {
        width: 50% !important;
      }
      .english{
        width: 55% !important;
      }
      .ts{
        width: 30% !important;
      }
    }
  }
}
</style>