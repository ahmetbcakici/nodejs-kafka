const { Kafka } = require('kafkajs')

generateConsumer()

async function generateConsumer() {
  try {
    const kafka = new Kafka({
      clientId: 'kafka-sample',
      brokers: ["192.168.23.66:9092"]
    })

    const consumer = kafka.consumer({
      groupId: 'sample_1'
    })

    console.log('Connecting to Consumer..')
    await consumer.connect()
    console.log('Connected to Consumer succesfully.')

    /* consumer subscribe */
    await consumer.subscribe({
      topic: 'Log',
      fromBeginning: true
    })

    await consumer.run({
      eachMessage: async result => {
        console.log(`Message came:${result.message.value}, Par:${result.partition}`)
      }
    })
  } catch (error) {
    console.log(error)
  }
}