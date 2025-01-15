<template>
  <div>
    <div class="relative">
      <Calendar v-bind="$attrs" type="text" iconDisplay="input" v-model="model" panelClass="!min-w-min" :pt="{
        panel: { class: ' dark:bg-gray-800 dark:text-light dark:hover:bg-gray-800 dark:hover:text-gray-400' },
        root: { class: 'border-0 block w-ful shadow-none' },
        inputIcon: { class: 'text-error end-3 right-none' },
        header: { class: ' dark:text-light dark:bg-gray-800' },
        input: { class: getSize(size) },
      }" />

    </div>
  </div>
</template>

<script setup>

const model = defineModel()
import Calendar from 'primevue/calendar';
import { onMounted, ref, watch } from 'vue';
const props = defineProps(
  ['size', "primevue", "hasTime","local"]
);
defineOptions({
  inheritAttrs: false
})
const zeroPad = (num, places) => String(num).padStart(places, '0');

let isProgrammaticChange = false; // Flag to control programmatic updates

watch(model, (newValue) => {
  if (isProgrammaticChange) {
    isProgrammaticChange = false; // Reset flag and exit to avoid triggering a loop
    return;
  }

  if (!newValue) return;

  const adjustedDate = new Date(newValue);
  adjustedDate.setMinutes(adjustedDate.getMinutes());

  const year = adjustedDate.getFullYear();
  const month = zeroPad(adjustedDate.getMonth() + 1, 2);
  const day = zeroPad(adjustedDate.getDate(), 2);

  let current_date;
  if (!props.hasTime) {

    current_date = `${year}-${month}-${day}`;

    // Set the flag before updating model to prevent recursive watch call
    isProgrammaticChange = true;
    model.value = current_date;
  }


  console.log(model.value);
});
const formatDate = (date) => {
  let month = date.getMonth() + 1;
  let day = date.getDate();

  if (month < 10) {
    month = '0' + month;
  }

  if (day < 10) {
    day = '0' + day;
  }

  return date.getFullYear() + '-' + month + '-' + day;
}

onMounted(() => {
  if (props.primevue =! null && props.local === "fr") {
      props.primevue.config.locale.dateAfter = "Après le",
        props.primevue.config.locale.dateBefore = "Avant le",
        props.primevue.config.locale.dateFormat = "dd/mm/yy",
        props.primevue.config.locale.dateIs = "La date est",
        props.primevue.config.locale.dateIsNot = "La date n'est pas",
        props.primevue.config.locale.dayNames = [
          "Dimanche",
          "Lundi",
          "Mardi",
          "Mercredi",
          "Jeudi",
          "Vendredi",
          "Samedi"
        ],
        props.primevue.config.locale.dayNamesMin = [
          "Dim",
          "Lun",
          "Mar",
          "Mer",
          "Jeu",
          "Ven",
          "Sam"
        ];
      props.primevue.config.locale.dayNamesShort = [
        "Dim",
        "Lundi",
        "Mardi",
        "Mercr",
        "Jeudi",
        "Vendr",
        "Sam"
      ],
        props.primevue.config.locale.monthNames = [
          "Janvier",
          "Février",
          "Mars",
          "Avril",
          "Mai",
          "Juin",
          "Juillet",
          "Août",
          "Septembre",
          "Octobre",
          "Novembre",
          "Décembre"
        ],
        props.primevue.config.locale.monthNamesShort = [
          "Janv",
          "Févr",
          "Mars",
          "Avr",
          "Mai",
          "Juin",
          "Juill",
          "Août",
          "Sept",
          "Oct",
          "Nov",
          "Déc"
        ],
        props.primevue.config.locale.nextDecade = "Décennie suivante",
        props.primevue.config.locale.nextHour = "Heure suivante",
        props.primevue.config.locale.nextMinute = "Minute suivante",
        props.primevue.config.locale.nextMonth = "Mois suivant",
        props.primevue.config.locale.nextSecond = "Seconde suivante",
        props.primevue.config.locale.nextYear = "Année suivante",
        props.primevue.config.locale.now = "Maintenant",
        props.primevue.config.locale.prevDecade = "Décennie précédente",
        props.primevue.config.locale.prevHour = "Heure précédente",
        props.primevue.config.locale.prevMinute = "Minute précédente",
        props.primevue.config.locale.prevMonth = "Mois précédent",
        props.primevue.config.locale.prevSecond = "Seconde précédente",
        props.primevue.config.locale.prevYear = "Année précédente",
        props.primevue.config.locale.today = "Aujourd'hui"; 
  }
  else if (props.primevue =! null && props.local === "ar") {
    props.primevue.config.locale.firstDayOfWeek = 1,
      props.primevue.config.locale.dateAfter = "بعد",
      props.primevue.config.locale.dateBefore = "قبل",
      props.primevue.config.locale.dateFormat = "dd/mm/yy",
      props.primevue.config.locale.dateIs = "التاريخ هو",
      props.primevue.config.locale.dateIsNot = "التاريخ ليس كذلك",
      props.primevue.config.locale.dayNames = [
        "الأحد",
        "الإثنين",
        "الثلاثاء",
        "الاربعاء",
        "الخميس",
        "الجمعة",
        "السبت",
      ],
      props.primevue.config.locale.dayNamesShort = [
        "الأحد",
        "الإثنين",
        "الثلاثاء",
        "الاربعاء",
        "الخميس",
        "الجمعة",
        "السبت",
      ];
    props.primevue.config.locale.dayNamesMin = [
      "ح",
      "ن",
      "ث",
      "ب",
      "خ",
      "ج",
      "س",
    ],
      props.primevue.config.locale.monthNames = [
        "يناير",
        "فبراير",
        "مارس",
        "ابريل",
        "مايو",
        "يونيو",
        "يوليو",
        "اغسطس",
        "سبتمبر",
        "اكتوبر",
        "نوفمبر",
        "ديسمبر"
      ],
      props.primevue.config.locale.monthNamesShort = [
        "يناير",
        "فبراير",
        "مارس",
        "ابريل",
        "مايو",
        "يونيو",
        "يوليو",
        "اغسطس",
        "سبتمبر",
        "اكتوبر",
        "نوفمبر",
        "ديسمبر"
      ],
      props.primevue.config.locale.nextDecade = "العقد القادم",
      props.primevue.config.locale.nextHour = "الساعة القادمة",
      props.primevue.config.locale.nextMinute = "الدقيقة القادمة",
      props.primevue.config.locale.nextMonth = "الشهر القادم",
      props.primevue.config.locale.nextSecond = "الثانية القادمة",
      props.primevue.config.locale.nextYear = "السنة القادمة",
      props.primevue.config.locale.now = "الآن",
      props.primevue.config.locale.prevDecade = "العقد الماضي",
      props.primevue.config.locale.prevHour = "الساعة السابقة",
      props.primevue.config.locale.prevMinute = "الدقيقة السابقة",
      props.primevue.config.locale.prevMonth = "الشهر السابق",
      props.primevue.config.locale.prevSecond = "الثانية السابقة",
      props.primevue.config.locale.prevYear = "السنة السابقة",
      props.primevue.config.locale.today = "اليوم";

  }
  }
 );



const sizes = ref({
  xs: "text-xs !h-6 bg-white shadow-sm border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:ring-1 focus:border-primary block w-full p-2.5  dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary",
  sm: "text-sm !h-8 bg-white shadow-sm border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:ring-1 focus:border-primary block w-full p-2.5  dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary",
  md: "text-md !h-10 bg-white shadow-sm border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:ring-1 focus:border-primary block w-full p-2.5  dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary",
  lg: "text-lg !h-12 bg-white shadow-sm border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:ring-1 focus:border-primary block w-full p-2.5  dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary",
  xl: "text-xl !h-14 bg-white shadow-sm border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:ring-1 focus:border-primary block w-full p-2.5  dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary",
})
const getSize = (size) => {
  return sizes.value[size] || sizes.value.md;
}
</script>
