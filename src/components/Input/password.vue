<template>
    <div class="relative" >
       <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
         <i class="pi pi-lock h-4 w-4 text-gray-700" />
       </div>
             <div >
                 <input v-bind="$attrs" :type="showPassword ? 'text' : 'password'" v-model="model" 
                 class="bg-white ps-10 hide-datapicker pe-20 shadow-sm border !h-10 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:ring-1 focus:border-primary block w-full p-2.5  dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"  />
             </div>
             <div class="absolute inset-y-0 end-0 flex items-center pe-4 space-x-3">
                 <button class="button" @click="toggleShow" type="button">
                         <i v-if="showPassword" class="pi pi-eye-slash text-md text-gray-500" />                    
                         <i v-else class="pi pi-eye text-md text-gray-500" />                    
                 </button>
                 <button  v-if="isGenerate" class="button" @click="generatePassword" type="button">
                         <i class="pi pi-sync text-sm text-gray-500" />                    
                 </button>
             </div> 
         </div>
         <div class="flex mt-2" v-if="isValide">
            <div :class="'flex h-2 w-full mx-1 rounded-full '+colors[successCount-1]" v-for="item in (0, successCount)" :key="item"  ></div>
            <div class="flex h-2 w-full mx-1 rounded-full bg-white border border-gray-300 dark:border-gray-600 dark:bg-slate-800" v-for="item in (0, count)" :key="item"  ></div>
        </div>
         <div v-show="suggetion" class="bg-white border shadow-sm border-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white p-4 rounded-lg mt-2"  :class="{'hidden' : !showSuggetion}" >
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
const props = defineProps(['isValide','suggetion','isGenerate'])
   
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
				if (!condition.regex.test(model.value)) {
                   
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

const toggleShow = () => {
    showPassword.value = !showPassword.value;
};
const model = defineModel()
defineOptions({
    inheritAttrs:false
})

const generatePassword = () => {
          const length = 12;
          const lowercase = 'abcdefghijklmnopqrstuvwxyz';
          const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
          const numbers = '0123456789';
          const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

          const allChars = lowercase + uppercase + numbers + symbols;
          
          const getRandomChar = (chars) => chars[Math.floor(Math.random() * chars.length)];

          let newPassword = '';

          // Ensure the password meets the criteria
          newPassword += getRandomChar(lowercase);
          newPassword += getRandomChar(uppercase);
          newPassword += getRandomChar(numbers + symbols);

          // Fill the rest of the password length with random characters from all character sets
          for (let i = newPassword.length; i < length; i++) {
            newPassword += getRandomChar(allChars);
          }

          // Shuffle the password to ensure the criteria characters are not in the first positions
          newPassword = newPassword.split('').sort(() => 0.5 - Math.random()).join('');
        
          showPassword.value  = true;
          model.value = newPassword;
        };
   
</script>
     