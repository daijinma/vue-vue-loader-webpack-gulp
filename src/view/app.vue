<template>
  <div id="wrapper">
    <!-- header -->
    <div id="header">
      this is header
    </div>
    <!-- main view -->
    <router-view
      class="view"
      keep-alive
      transition
      transition-mode="out-in">
    </router-view>
     <!-- footer -->
    <div id="footer">
      this is footer
    </div>
  </div>
</template>
