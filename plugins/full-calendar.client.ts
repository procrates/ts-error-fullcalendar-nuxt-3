import "@fullcalendar/core/vdom"; // solve problem with Vite
import FullCalendar, { CalendarOptions } from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

FullCalendar.options = {
  plugins: [dayGridPlugin, interactionPlugin],
  initialView: "dayGridMonth",
  events: [
    { title: "event 1", date: "2022-06-26" },
    { title: "event 2", date: "2022-06-27" },
  ],
} as CalendarOptions;

export default defineNuxtPlugin((/* nuxtApp */) => {
  return {
    provide: {
      fullCalendar: FullCalendar,
    },
  };
});
