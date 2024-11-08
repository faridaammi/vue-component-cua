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
    // added
    isSorted: {
        type: Boolean,
        default: false
    },
    tableId: String,
    searchPlaceholder: {
        type: String,
        default: "Search here"
    },
    searchTextButton: {
        type: String,
        default: "Search"
    },
    defaultSort: {
        type: String,

    },
    //
    headers: Array,
    data: Array,
    name: String,
    columns: Array,
    checkable: Boolean,
    actions: Boolean,
    selectedCount: {
        type: Number,
        default: 10
    },
    searchValue:String
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

const valueSearch = ref(props.searchValue);
    
    const searchValue = computed(() => {
      return valueSearch.value ;
    });


const toggleColumn = (index) => {
    if (hiddenColumns.value.includes(index)) {
        hiddenColumns.value = hiddenColumns.value.filter((colIndex) => colIndex !== index);
    } else {
        hiddenColumns.value.push(index);
    }
    storageHeader()

};

const initColumn = () => {
    props.headers.map((column, i) => {
        if (!column.display)
            hiddenColumns.value.push(i)
    });

};

const checkedDefault = () => {
    props.data.forEach(dt => {
        if (dt.checked === undefined && props.checkable) {
            dt.checked = false;
        }
    })
}


const checkStorage = () => {
    if (localStorage.getItem("TabelHeaders_" + props.tableId)) {
        props.headers.splice(0);
        const storageHeaderList = JSON.parse(localStorage.getItem("TabelHeaders_" + props.tableId));
        storageHeaderList.map((item) => {
            props.headers.push(item);
        })

    }
}
const searchQuery = ref()


const checkedList = ref([]);
const checkedAll = ref(false)

const emit = defineEmits(['onSelect', 'onChangeCount', 'onSorted']);

const checkLine = (index) => {
    // Toggle the visibility of the column by adding/removing its index from hiddenColumns array
};
const checkAll = () => {
    if (checkedAll.value == true) {
        for (let i = 0; i < props.data.length; i++) {
            props.data[i].checked = true;
        }
    }
    else { props.data.forEach((item) => item.checked = false) }
    checkedData()
    emit("onSelect", checkedList.value);

}
const allTogglesFalse = computed(() => {
    return props.headers.some(header => header.toggle === true);
});
const onSearch = (value) => emit("onSearch", value);
const checkedData = () => {
    checkedList.value = props.data.filter(row => row.checked);
    emit("onSelect", checkedList.value);
};

const changeCount = (value) => { emit('onChangeCount', value) }

const newHeaders = ref([])

const storageHeader = () => {
    hiddenColumns.value.map((item) => {
        props.headers.forEach((header, key) => {
            if (item == key) {
                props.headers[key].display = false;
            }
        })
    })
    localStorage.setItem("TabelHeaders_" + props.tableId, JSON.stringify(props.headers));
}
//
const sortedField = ref(null);
const sortedOrder = ref(null);
// Sorting state
const sortState = ref([
    { index: 0, order: 'default' },
    { index: 1, order: 'asc' },
    { index: 2, order: 'desc' },
]);
// Sorting icons
const sortIcons = {
    default: 'pi-sort-alt',
    asc: 'pi-sort-amount-down-alt',
    desc: 'pi-sort-amount-up-alt',
};

// Function to get the current sort icon for a column
const getSortIcon = (index) => {
    return sortIcons[index];
};

// Function to toggle sorting order
const sendSort = () => { emit('onSorted', (sortedOrder.value == "desc" ? '-' : "") + sortedField.value) }

const toggleSort = (key) => {
    var isSortable = true;
    props.headers.map((header) => {
        if (header.key == key && header.sorted != true) {
            isSortable = false;
        }
    });
    if (isSortable) {
        if(key == sortedField.value){
            sortedOrder.value = sortedOrder.value == "asc" ? "desc" : "asc";
        }else{
            sortedOrder.value = "asc";
        }
        sortedField.value = key;
    }
    sendSort();
};

onMounted(() => {
    checkStorage();
    checkedDefault();
    initColumn();
    checkAll();
    allTogglesFalse
    if (props.defaultSort != null && props.isSorted) {
        sortedField.value = props.defaultSort.replace("-", "");
        sortedOrder.value = props.defaultSort.indexOf("-") == -1 ? "asc" : "desc";
    }
    
    console.log(props.valueDefault);
});

</script>

<template>
    <div>
        <div class="clear-both block space-y-2">
            <!-- count rows -->
            <DropDown class="float-end mb-2 ml-2 xl:flex hidden" :placeholder='selectedCount'
                :modelValue="selectedCount" :options='numberRow' optionLabel='name' optionValue="code"
                @change="changeCount" />
            <!-- header settings -->
            <div>
                <DropDownButton class="float-end mb-2" v-model="model" v-if="allTogglesFalse" :isClickAway="true">
                    <template v-slot:drop>
                        <LightButtonIcon icon='pi-objects-column' size="md" color='light' />
                    </template>
                    <template v-slot:panel>
                        <ul class='p-3 w-max min-w-52 space-y-3 text-sm text-gray-700 dark:text-gray-200 dark:bg-gray-800'
                            aria-labelledby='dropdownCheckboxButton'>
                            <li v-for="(header, i) in headers" :key="i">
                                <div v-if="header.toggle == true" class='flex items-center'>
                                    <CheckBox :binary="true" :inputId="['checkbox-item-', i]" v-model="header.display"
                                        name="sexe" @change="toggleColumn(i)" />
                                    <Label :for="['checkbox-item-', i]" class="mx-2">
                                        {{ header.title }}
                                    </Label>
                                </div>
                            </li>
                        </ul>
                    </template>
                </DropDownButton>
            </div>
            <slot />
            <!-- search -->
            <div class="w-full mb-4 lg:w-min">
                <InputSearch :placeholder='searchPlaceholder' v-model="valueSearch" class="w-full lg:mb-2 md:w-min mb-1 float-start"
                    @formSubmit='onSearch'>
                    <LightButton type="submit" color="dark" startIcon="pi-search"
                        class="flex ml-2 mb-1 lg:mb-2 md:mr-1 ">
                        {{ searchTextButton }}
                    </LightButton>
                </InputSearch>
            </div>

            <div class="items-center">
                <slot name="actions" />
            </div>
        </div>

        <!-- table -->
        <div>
            <div
                class="relative mt-2 overflow-x-auto sm:rounded-lg block clear-both border shadow-sm dark:border-gray-600">

                <table v-bind="$attrs"
                    class="w-full table-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th :align="header.align" :width="header.title == 'checked' ? '40px' : 'initial'"
                                v-for="(header, i) in headers" :key="`${header}${i}`"
                                :class="{ 'px-3  py-3': header.title == 'checked', 'px-4 py-3': !hiddenColumns.includes(i) && header.title != 'checked', 'hidden': hiddenColumns.includes(i) || (header.title == 'checked' && checkable == false) }">
                                <span v-if="header.title == 'checked' && checkable == true">
                                    <CheckBox :binary="true" id="item-all" v-model='checkedAll' @change="checkAll" />
                                </span>
                                <span v-else-if="!hiddenColumns.includes(i)" 
                                    :class="{'text-primary': sortedField === header.key && header.key != 'actions', 'cursor-pointer': header.sorted , }"
                                    @click="toggleSort(header.key)">
                                    {{ header.title }}
                                    <i v-if="header.sorted == true && $props.isSorted === true && sortedField == header.key"
                                        :class="['pi float-end text-xs cursor-pointer', getSortIcon(sortedOrder)]"></i>
                                </span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(entity, rowIndex) in data" :key="rowIndex"
                            class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <template v-for="(header, colIndex) in headers" :key="colIndex">
                                <td :align="header.align"
                                    v-if="!hiddenColumns.includes(colIndex) && header.title != 'checked'"
                                    :class="{ 'px-4 py-2': !hiddenColumns.includes(colIndex), 'hidden': hiddenColumns.includes(colIndex) }">
                                    <slot :name="`column${colIndex}`" :entity="entity"></slot>
                                </td>
                                <td v-if="!hiddenColumns.includes(colIndex) && header.title == 'checked' && checkable == true"
                                    class="px-3 py-2 ">
                                    <CheckBox :binary="true" :id="`item-line-` + rowIndex" v-model="entity.checked"
                                        name="lines" @change="checkedData" />
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
