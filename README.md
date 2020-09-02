# Docker codes for installations

Zookeeper;
docker run --name zookeeper -p 2181:2181 zookeeper

Kafka;
docker run --name kafka -p 9092:9092 -e KAFKA_ZOOKEEPER_CONNECT=<b><i>YOUR_IP</i></b>:2181 -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<b><i>YOUR_IP</i></b>:9092 -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 confluentinc/cp-kafka

If you want to run them later, delete --name parameters for both.

