<template>
  <div class="flex flex-col items-center w-full h-screen">
    <div class="flex justify-center w-full py-2">
      <v-button class="" @click.native="fillRows">Generate</v-button>
    </div>
    <div class="px-8 py-4 h-5/6 w-2/3 h-max-5/6 overflow-y-auto" v-if="isOpen">
      <v-table :headers="headers" :rows="rows" />
    </div>
    <div class="py-8">Total: {{ totalPrice }}</div>
  </div>
</template>

<script>
import VButton from '../components/VButton.vue';
import VTable from '../components/VTable.vue';
import { getRandomInt, getRandomFloat } from '../helpers';
export default {
  components: { VTable, VButton },
  data() {
    return {
      headers: [
        {
          title: 'Name',
          value: 'name',
        },
        {
          title: 'Unit price',
          value: 'unitPrice',
        },
        {
          title: 'Quantity',
          value: 'quantity',
        },
        {
          title: 'Price',
          value: 'price',
          format: (val) => val.toFixed(2),
        },
      ],
      alphabet: 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ'.split(''),
      rows: [],
      isOpen: false,
    };
  },
  computed: {
    totalPrice() {
      return this.rows
        .reduce((accumulator, currentValue) => {
          return accumulator + currentValue.price;
        }, 0)
        .toFixed(2);
    },
  },
  methods: {
    fillRows() {
      this.rows = [];
      for (let i = 0; i < 50; i++) {
        const name = Array(5)
          .fill()
          .map(() => this.alphabet[getRandomInt(0, this.alphabet.length - 1)]);
        const unitPrice = getRandomFloat(0.01, 1000);
        const quantity = getRandomInt(1, 100);
        const price = unitPrice * quantity;
        this.rows.push({
          name: name.join(''),
          unitPrice,
          quantity,
          price,
        });
      }
      this.isOpen = true;
    },
  },
};
</script>
