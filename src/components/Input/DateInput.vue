<template>
  <div>
    <div class="relative" >
      <Calendar v-bind="$attrs" type="text" iconDisplay="input" v-model="model" panelClass="!min-w-min"

      :pt="{
        panel : {class : ' dark:bg-gray-800 dark:text-light dark:hover:bg-gray-800 dark:hover:text-gray-400'},
        root: { class : 'border-0 block w-ful shadow-none' },
        inputIcon :{ class:'text-error end-3 right-none'},	
        header :{ class:' dark:text-light dark:bg-gray-800'},	
        input: { class: getSize(size) },}"
      />
 
    
</div>
  </div>
</template>

<script setup>
import { usePrimeVue } from "primevue/config";
const primevue = usePrimeVue();

const model = defineModel()
import Calendar from 'primevue/calendar';
import { onMounted, ref } from 'vue';
defineProps(
  ['size']
);
defineOptions({
    inheritAttrs:false
})
onMounted(() => {
  primevue.config.locale.dateAfter = "Après le",
  primevue.config.locale.dateBefore = "Avant le",
  primevue.config.locale.dateFormat = "dd/mm/yy",
  primevue.config.locale.dateIs = "La date est",
  primevue.config.locale.dateIsNot = "La date n'est pas",
  primevue.config.locale.dayNames = [
      "Dimanche",
      "Lundi",
      "Mardi",
      "Mercredi",
      "Jeudi",
      "Vendredi",
      "Samedi"
    ],
  primevue.config.locale.dayNamesMin =  [
      "Dim",
      "Lun",
      "Mar",
      "Mer",
      "Jeu",
      "Ven",
      "Sam"
    ];
    primevue.config.locale.dayNamesShort = [
      "Dim",
      "Lundi",
      "Mardi",
      "Mercr",
      "Jeudi",
      "Vendr",
      "Sam"
    ],
  primevue.config.locale.monthNames = [
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
  primevue.config.locale.monthNamesShort = [
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
    primevue.config.locale.nextDecade = "Décennie suivante",
    primevue.config.locale.nextHour = "Heure suivante",
    primevue.config.locale.nextMinute = "Minute suivante",
    primevue.config.locale.nextMonth = "Mois suivant",
    primevue.config.locale.nextSecond = "Seconde suivante",
    primevue.config.locale.nextYear = "Année suivante",
    primevue.config.locale.now = "Maintenant",
    primevue.config.locale.prevDecade = "Décennie précédente",
    primevue.config.locale.prevHour = "Heure précédente",
    primevue.config.locale.prevMinute = "Minute précédente",
    primevue.config.locale.prevMonth = "Mois précédent",
    primevue.config.locale.prevSecond = "Seconde précédente",
    primevue.config.locale.prevYear = "Année précédente",
    primevue.config.locale.today = "Aujourd'hui";


});
const sizes = ref({
    xs : "text-xs !h-6 bg-white shadow-sm border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:ring-1 focus:border-primary block w-full p-2.5  dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary",
    sm : "text-sm !h-8 bg-white shadow-sm border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:ring-1 focus:border-primary block w-full p-2.5  dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary",
    md : "text-md !h-10 bg-white shadow-sm border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:ring-1 focus:border-primary block w-full p-2.5  dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary",
    lg : "text-lg !h-12 bg-white shadow-sm border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:ring-1 focus:border-primary block w-full p-2.5  dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary",
    xl : "text-xl !h-14 bg-white shadow-sm border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:ring-1 focus:border-primary block w-full p-2.5  dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary",
})
const getSize = (size) => {
  return sizes.value[size] || sizes.value.md;
}




</script>


