var Cashbox = {
  amount: 0,
  operationHistory: [],
  addPayment: function(payment) {
    if (payment.amount <= 0) {
        console.error("amound not affected");
        return;
    }
    this.amount += payment.amount;
    this.operationHistory.push({...payment, type: 'Платеж', createdAt: new Date()})
  },
  refundPayment: function(refund) {
  if (refund.amount <= 0 || refund.amount > this.amount) {
      console.error("amound not affected");
      return;
  }
  this.amount -= refund.amount;
  this.operationHistory.push({...refund, type: 'Возврат', createdAt: new Date()})
  },
  showHistory: function() {
    this.operationHistory.forEach((value, index) => {
      console.log(`${index + 1}. ${value.createdAt.toLocaleDateString()} ${value.createdAt.getHours()}:${value.createdAt.getMinutes()} ${value.type}: ${value.amount} руб Операция: ${value.info}`);
    })
  },
};