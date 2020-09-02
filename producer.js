const { Kafka } = require('kafkajs')

generateProducer()

async function generateProducer() {
  try {
    const kafka = new Kafka({
      clientId: 'kafka-sample',
      brokers: ["192.168.23.66:9092"]
    })

    const producer = kafka.producer()
    console.log('Connecting to Producer..')
    await producer.connect()
    console.log('Connected to Producer succesfully.')

    const message_result = await producer.send({
      topic: 'Log',
      messages: [
        { value: "Test message", partition: 0 }
      ]
    })
    console.log("Sent successfully", JSON.stringify(message_result))
    await producer.disconnect()
  } catch (error) {
    console.log(error)
  }
  finally {
    process.exit(0)
  }
}