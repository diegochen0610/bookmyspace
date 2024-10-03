<template>
  <div class="home">
    <h2>會議室預約狀況</h2>

    <!-- 會議室分類的 Tabs -->
    <div class="tabs">
      <button
        v-for="(room, index) in rooms"
        :key="index"
        :class="{ active: currentRoom === room }"
        @click="currentRoom = room"
      >
        {{ room }}
      </button>
    </div>

    <!-- 表格展示預約信息 -->
    <table class="booking-table">
      <thead>
        <tr>
          <th>日期</th>
          <th v-for="hour in hours" :key="hour">{{ hour }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(day, index) in upcomingDates" :key="index">
          <td>{{ day }}</td>
          <td v-for="hour in hours" :key="hour">
            <div v-if="getBooking(day, hour)">
              <div>{{ getBooking(day, hour).status }}</div>
              <div>{{ getBooking(day, hour).department }}</div>
              <div>{{ getBooking(day, hour).name }}</div>
            </div>
            <div v-else>空閒</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "HomePageg",
  data() {
    return {
      // 模擬的會議室數據
      rooms: ["會議室 A", "會議室 B", "會議室 C"],

      // 當前選中的會議室
      currentRoom: "會議室 A",

      // 時間段（上午9點至下午6點）test
      hours: [
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
      ],

      // 模擬的預約數據，根據會議室分類
      bookings: {
        "會議室 A": [
          {
            date: "2024-09-10",
            time: "09:00",
            status: "已預約",
            department: "IT 部門",
            name: "張三",
          },
          {
            date: "2024-09-11",
            time: "10:00",
            status: "已預約",
            department: "財務部",
            name: "李四",
          },
        ],
        "會議室 B": [
          {
            date: "2024-09-10",
            time: "14:00",
            status: "已預約",
            department: "人事部",
            name: "王五",
          },
        ],
        "會議室 C": [],
      },
    };
  },
  computed: {
    // 計算未來14天的日期
    upcomingDates() {
      const dates = [];
      const today = new Date();
      for (let i = 0; i < 14; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        dates.push(date.toISOString().split("T")[0]);
      }
      return dates;
    },
  },
  methods: {
    // 根據日期和時間獲取當前選中會議室的預約
    getBooking(day, hour) {
      return this.bookings[this.currentRoom].find(
        (booking) => booking.date === day && booking.time === hour
      );
    },
  },
};
</script>

<style>
.home {
  padding: 20px;
}

h2 {
  margin-bottom: 20px;
  color: #2c3e50;
}

/* Tabs 樣式 */
.tabs {
  display: flex;
  margin-bottom: 20px;
}

.tabs button {
  padding: 10px 20px;
  margin-right: 10px;
  border: none;
  background-color: #42b983;
  color: white;
  cursor: pointer;
}

.tabs button.active {
  background-color: #367c6b;
}

/* 表格樣式 */
.booking-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.booking-table th,
.booking-table td {
  padding: 12px;
  border: 1px solid #ddd;
  text-align: center;
}

.booking-table th {
  background-color: #42b983;
  color: white;
}

.booking-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.booking-table tr:hover {
  background-color: #f1f1f1;
}

/* 預約狀態樣式 */
.booked {
  color: red;
}

.available {
  color: green;
}
</style>
