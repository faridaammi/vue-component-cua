<script setup>
import {
    ref,
    onMounted,
    computed,
    watch
} from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup'; // optional
import Row from 'primevue/row'; // optional
import MultiSelect from 'primevue/multiselect';
import Button from '../Button/Button.vue';
import ButtonIcon from '../Button/ButtonIcon.vue';
import LightButton from '../Button/LightButton.vue';
import DropDownButton from '../Drop/DropDownButton.vue'
import InputSearch from '../Input/SearchInput.vue'
import LightButtonIcon from '../Button/LightButtonIcon.vue';
import CheckBox from '../Input/CheckBox.vue';
import Label from '../Input/Label.vue';
import DropDown from '../Drop/DropDown.vue';

const props = defineProps({
    headers: Array,
    data: Array,
    name: String,
    columns: Array,
    checkable: Boolean,
    actions: Boolean,
    selectedCount: {
        type : Number,
        default : 10
    }
});
const hiddenColumns = ref([]);
const numberRow = ref([
    { name: '10', code: '10' },
    { name: '30', code: '30' },
    { name: '50', code: '50' },
    { name: '100', code: '100' },
])
const model = defineModel()
const selectCount = ref(100)



const toggleColumn = (index) => {
    // Toggle the visibility of the column by adding/removing its index from hiddenColumns array
    if (hiddenColumns.value.includes(index) ) {
        hiddenColumns.value = hiddenColumns.value.filter((colIndex) => colIndex !== index);
    } else {
        hiddenColumns.value.push(index);
    }
};

const initColumn = () => {
    // console.log(props.headers);
    props.headers.map((column, i) => {
        if (!column.display)
            hiddenColumns.value.push(i)
       
    }); 

}; 

const checkedDefault = ()=> {
    props.data.forEach(dt => {
       if(dt.checked === undefined && props.checkable) 
       {
            dt.checked = false;
       }
    })
}
onMounted(() => {
    checkedDefault();
    initColumn();
    checkAll();
    allTogglesFalse

});
const searchQuery = ref()


const checkedList = ref([]);
const checkedAll = ref(false)

const emit = defineEmits(['onSelect','onChangeCount']);

const checkLine = (index) => {
    // Toggle the visibility of the column by adding/removing its index from hiddenColumns array
};
const checkAll = () => {
    if(checkedAll.value == true)
    {
        for(let i =0 ; i < props.data.length; i++ ){
            props.data[i].checked = true;
        }
    }
    else {props.data.forEach((item) => item.checked = false)}
    checkedData()
    emit("onSelect",checkedList.value);

}
const allTogglesFalse = computed(() => {
      return props.headers.some(header => header.toggle === true);
    });
const onSearch = (value) =>  emit("onSearch",value);   
const checkedData = () => {   
    checkedList.value = props.data.filter(row => row.checked);
    // console.log(checkedList.value)
    emit("onSelect",checkedList.value);
};

const changeCount = (value)=>{emit('onChangeCount',value)}

</script>

<template>
    <div>
        <div class="clear-both block space-y-2">
            <DropDown class="float-end ml-2 xl:flex hidden"
            :placeholder='selectedCount' 
            :modelValue="selectedCount"
            :options='numberRow'
            optionLabel='name'
            optionValue="code"
            @change="changeCount"
            />
            <div>
                <DropDownButton class="float-end" v-model="model" v-if="allTogglesFalse">
                <template v-slot:drop>
                    <LightButtonIcon icon='pi-objects-column' size="md" color='light' />
                </template>
                <template v-slot:panel >
                    <ul  class='p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200 dark:bg-gray-800'
                        aria-labelledby='dropdownCheckboxButton'>
                        <li  v-for="(header, i) in headers" :key="i">
                            <div v-if="header.toggle == true" class='flex items-center' >
                                <CheckBox  :binary="true"   :id="['checkbox-item-', i]" v-model="header.display" name="sexe"
                                    @change="toggleColumn(i)" />
                                <Label :for="['checkbox-item-', i]" class="mx-2">
                                    {{ header.title }}
                                </Label>
                            </div>
                        </li>
                    </ul>
                </template>
            </DropDownButton>
            </div>
            <slot/>
            <div class="w-full  lg:w-min">
                <InputSearch placeholder='search ...' class="w-full lg:mb-0 md:w-min mb-1 float-start"  @formSubmit='onSearch'>
                <LightButton type="submit" color="dark" startIcon="pi-search" class="flex ml-2 mb-1 lg:mb-0 md:mr-1 ">Search</LightButton>
            </InputSearch>
            </div>
           
            <div class="flex items-center ">
                <slot name="actions" />
            </div>
        </div>

        <!-- table -->
        <div>
            <div class="relative overflow-x-auto sm:rounded-lg block clear-both border shadow-sm dark:border-gray-600">
                <table v-bind="$attrs"
                    class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th :align="header.align" :width=" header.title == 'checked' ? '40px' : 'initial'"  v-for="(header, i) in headers" :key="`${header}${i}`"
                                :class="{'px-3  py-3' : header.title == 'checked' , 'px-4 py-3': !hiddenColumns.includes(i) && header.title != 'checked' , 'hidden': hiddenColumns.includes(i) ||  (header.title == 'checked' && checkable == false) }" >
                                <span v-if="header.title == 'checked' && checkable == true">
                                    <CheckBox :binary="true"   id="item-all" v-model='checkedAll' @change="checkAll"/>
                                </span>
                                <span v-else-if="!hiddenColumns.includes(i) "> {{ header.title }}</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(entity, rowIndex) in data" :key="rowIndex"
                            class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <template v-for="(header, colIndex) in headers" :key="colIndex">
                                <td :align="header.align" v-if="!hiddenColumns.includes(colIndex)  && header.title != 'checked'"
                                    :class="{ 'px-4 py-4': !hiddenColumns.includes(colIndex), 'hidden': hiddenColumns.includes(colIndex) }">
                                    <slot :name="`column${colIndex}`" :entity="entity"></slot>
                                </td>
                                <td v-if="!hiddenColumns.includes(colIndex) && header.title == 'checked' && checkable == true" class="px-3 py-4 ">
                                    <CheckBox  :binary="true"   :id="`item-line-`+rowIndex" v-model="entity.checked" name="lines"
                                        @change="checkedData" />
                                </td>
                            </template>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    </div>
</template>

<style scoped>
.p-focus {
    outline-offset: 0px;
    outline: -webkit-focus-ring-color auto 1px;
}
</style>