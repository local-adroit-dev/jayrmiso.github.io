<template>
  <!-- begin::Dashboard -->
  <div class="row gy-5 gx-xl-8">
    <div class="col-xxl-12">
      <SampleTable
        widget-classes="card-xxl-stretch mb-5 mb-xl-8"
      ></SampleTable>
    </div>
    <div class="col-xxl-12">
      <CardList
        widget-classes="card-xxl-stretch mb-5 mb-xl-8"
      ></CardList>
    </div>
  </div>
  
  <!--end::Dashboard-->
</template>

<script>
import { defineComponent, onMounted } from "vue";
import TableWidget9 from "@/components/widgets/tables/Widget9.vue";
import ListWidget3 from "@/components/widgets/lists/Widget3.vue";
import { setCurrentPageTitle } from "@/core/helpers/breadcrumb.ts";
import SampleTable from "@/components/widgets/tables/SampleTable.vue";
import CardList from "@/components/card/CardList.vue"

export default defineComponent({
  name: "Vue MicroApp",
  components: {
    SampleTable,
    CardList
  },
  setup() {
    onMounted(() => {
      setCurrentPageTitle("Vue Micro App");
    });
  },
});
</script>
