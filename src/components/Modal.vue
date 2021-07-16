<template>
  <div class="modal flex">
    <div class="modal-content">
      <p>你确定离开输入框吗？输入内容将不被保存！</p>
      <div class="actions flex">
        <button @click="closeModal" class="purple">返回</button>
        <button @click="closeInvoice" class="red">确认离开</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex"

export default {
  name: "modal",
  methods: {
    ...mapMutations(["TOGGLE_MODAL", "TOGGLE_INVOICE", "TOGGLE_EDIT_INVOICE"]),
    closeModal() {
      this.TOGGLE_MODAL()
    },
    closeInvoice() {
      this.TOGGLE_MODAL()
      this.TOGGLE_INVOICE()
      if (this.editInvoice) {
        this.TOGGLE_EDIT_INVOICE()
      }
    },
  },
  computed: {
    ...mapState(["editInvoice"]),
  },
}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.8);

  .modal-content {
    border-radius: 20px;
    padding: 48px 32px;
    max-width: 450px;
    background-color: #252945;
    color: #fff;

    p {
      text-align: center;
    }

    .actions {
      margin-top: 24px;
      button {
        flex: 1;
      }
    }
  }
}
</style>
