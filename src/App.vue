<template>
  <header class="header">
    <div class="wrapper--header">
      <p class="header__logo">My Books App</p>
      <nav class="header__link-list">
        <router-link class="header__link-item" to="/">Alle Bücher</router-link>
        <router-link class="header__link-item" :to="{ name: 'AboutPage' }"
          >About</router-link
        >
        <router-link class="header__link-item" :to="{ name: 'BookmarksPage' }"
          >Merkliste</router-link
        >
      </nav>
    </div>
  </header>
  <main class="wrapper">
    <router-view />
  </main>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
:root {
  --primary: #34ace0;
  --primary-dark: #227093;
  --secondary: #1abc9c;
}

* {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

body {
  color: #2f3640;
}

.wrapper {
  margin: 0 auto;
  width: 960px;
}

.wrapper--header {
  display: flex;
  justify-content: space-between;
}

.header {
  color: #ffffff;
  line-height: 3.3rem;
  background-color: var(--primary);
  border-bottom: 2px solid var(--primary-dark);
}

.header__logo {
  font-size: 1.8rem;
}

.header__link-item {
  display: inline-block;
  color: #fff;
  text-decoration: none;
  margin-left: 10px;
  padding: 0 10px;
}
.router-link-active.header__link-item {
  background-color: var(--primary-dark);
}

.table-item__table {
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  width: 100%;
}

.table-item__table-head-name {
  width: 65%;
}

.table-item__table-head-isbn {
  width: 20%;
}

.table-item__table-head-actions {
  width: 15%;
}

.table-item__table-row button {
  padding: 5px;
  cursor: pointer;
  border-radius: 5px;
}

.table-item__table-btn-add {
  color: #ffffff;
  background-color: #009432;
  border: 2px solid #0f5200;
}

.table-item__table-btn-add:hover {
  background-color: #006522;
  border-color: rgb(9, 31, 4);
}

.table-item__table-btn-remove {
  color: #ffffff;
  background-color: #ed4c67;
  border: 2px solid #ae152e;
}

.table-item__table-btn-remove:hover {
  background-color: #bd223c;
  border: 2px solid #650011;
}

.table-item__table-row:hover button {
  opacity: 1;
}

.table-item__table thead tr {
  background-color: var(--primary);
  color: #ffffff;
  text-align: left;
}

.table-item__table th,
.table-item__table td {
  padding: 12px 15px;
}

.table-item__table tbody tr {
  border-bottom: 1px solid #dddddd;
}

.table-item__table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.table-item__table tbody tr:last-of-type {
  border-bottom: 2px solid var(--primary);
}

.table-item__table tbody tr.active-row {
  font-weight: bold;
  color: var(--primary);
}

.table-item__hl {
  margin-top: 1rem;
  padding-bottom: 0.4rem;
  border-bottom: 2px solid var(--primary-dark);
}
</style>
