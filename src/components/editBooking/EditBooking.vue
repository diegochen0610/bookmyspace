<template>
  <div>
    <h1>修改預約</h1>
    <p>修改預約 ID: {{ bookingId }}</p>
    <!-- 修改表單 -->
  </div>
</template>

<script>
export default {
  name: "EditBooking",
  props: ["id"],
  computed: {
    bookingId() {
      return this.id;
    },
  },
};
</script>
