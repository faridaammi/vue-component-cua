<template>
    <div class="relative mb-2" >
       <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
         <i class="pi pi-lock h-4 w-4 text-gray-700" />
       </div>
             <div >
                 <input v-bind="$attrs" :type="showPassword ? 'text' : 'password'" 
                 v-model="pass" 
                 class="bg-gray-50 ps-10 hide-datapicker border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:ring-1 focus:border-primary block w-full p-2.5  dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"  />
             </div>
             <div class="absolute inset-y-0 end-0 flex items-center pe-4 ">
                 <button class="button" @click="toggleShow">
                         <i v-if="showPassword" class="pi pi-eye-slash h-5 w-5 text-gray-500" />                    
                         <i v-else class="pi pi-eye h-5 w-5 text-gray-500" />                    
                 </button>
             </div> 
         </div>
         <div class="flex" v-if="isValide">
            <div :class="'flex h-2 w-full mx-1 rounded-full '+colors[successCount-1]" v-for="item in (0, successCount)" :key="item"  ></div>
            <div class="flex h-2 w-full mx-1 rounded-full bg-gray-50 border border-gray-300 dark:border-gray-600 dark:bg-slate-800" v-for="item in (0, count)" :key="item"  ></div>
        </div>
         <div v-show="suggetion" class="bg-gray-50 border border-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white p-4 rounded-lg mt-4"  :class="{'hidden' : !showSuggetion}" >
                <h3 class="text-xl font-semibold dark:text-white" >Suggetion</h3>
                <div v-for="error in passwordValidation.errors" :key="error">
                    <ul class="list-disc ml-4 text-dark dark:text-white"  >
                    <li>{{ error }}</li>
                </ul>
                </div>
               
        </div>
   </template>
   <script setup>
   import { computed, ref } from "vue";   
   
   const value = ref(null);
   const rules =ref([
   {message:'8 characters minimum required.',regex:/.{8,}/},
    {message:'One lowercase + uppercase letter required.',regex:/^(?=.*[a-z])(?=.*[A-Z]).+$/},
    {message:'One number or symbole required.',regex:/^(?=.*[!@#$%^&*(),.?":{}|<>0-9])[^\s]+$/},
    {message:'12 characters .',regex:/.{12,}/},
   ])   
   const colors =ref([
    "bg-error",
    "bg-accent",
    "bg-warning",
    "bg-success",
   
   ])   

   var count = ref(0)
   var successCount = ref(0)
   const pass = ref('')
   const password = ref(false)
   const showPassword = ref(null)
   const showSuggetion = ref(true)
   const buttonLabel = computed(() => (showPassword.value ? "Hide" : "Show"));
   const passwordValidation = computed(() => {
    count.value = 0;
    successCount.value = 0;
    let errors = []
    let success = []
			for (let condition of rules.value) {
				if (!condition.regex.test(pass.value)) {
                   
					errors.push(condition.message)
                    showSuggetion.value = true
				}else{
					success.push(condition.message)

                }
			}
            count.value =(errors.length);
            successCount.value =(success.length);
            if(errors.length === 0){
                showSuggetion.value = false
            }
            else if(errors.length > 0){
                showSuggetion.value = true
            }
			return {valid:errors.length === 0, errors, showSuggetion}
   })
const isRuleValid = (rule) => {
  return rule.regex.test(pass.value);
}
   const toggleShow = () => {
         showPassword.value = !showPassword.value;
       };
   const model = defineModel()
//    const isValide = ref()
   defineProps(['isValide','suggetion'])
     defineOptions({
         inheritAttrs:false
     })
   
     </script>
     