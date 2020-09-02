const { Kafka } = require('kafkajs')

generateTopic()

async function generateTopic() {
  try {
    const kafka = new Kafka({
      clientId: 'kafka-sample',
      brokers: ["192.168.23.66:9092"]
    })

    const admin = kafka.admin()
    console.log('Connecting to Kafka Broker..')
    await admin.connect()
    console.log('Connected to Kafka Broker succesfully. Gonna generate topic.')
    await admin.createTopics({
      topics: [
        { topic: "Log", numPartitions: 1 }
      ]
    })
    console.log("Topic generated.")
    await admin.disconnect()
  } catch (error) {
    console.log(error)
  }
  finally {
    process.exit(0)
  }
}