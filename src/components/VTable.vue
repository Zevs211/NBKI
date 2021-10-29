<template>
  <table class="w-full table-auto">
    <thead>
      <tr>
        <th
          v-for="(title, index) in headers"
          :key="index"
          class="text-xl py-2 bg-gray-300"
        >
          {{ title.title }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(row, rowIndex) in rows"
        :key="rowIndex"
        class="transition-colors hover:bg-gray-400 cursor-pointer"
        :class="[{ 'bg-gray-200': rowIndex % 2 === 0 }]"
      >
        <td
          class="px-4 py-1"
          v-for="(cell, cellIndex) in headers"
          :key="`${rowIndex}-${cellIndex}`"
        >
          {{ getCellValue(row, cell) }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'VTable',
  props: {
    headers: {
      type: Array,
      default: [],
    },
    rows: {
      type: Array,
      default: [],
    },
  },
  methods: {
    getCellValue(row, column) {
      const value = row[column.value];
      if (column.format) {
        return column.format(value);
      }
      return value;
    },
    selectRow(row) {
      this.$emit('select-row', row);
    },
  },
};
</script>

<style>
</style>