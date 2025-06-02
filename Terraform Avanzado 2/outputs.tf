output "instance_id_1" {
  value       = google_compute_instance.microservicio1.instance_id
  description = "Instance ID del microservicio 1"
}

output "public_ip_1" {
  value       = google_compute_instance.microservicio1.network_interface[0].access_config[0].nat_ip
  description = "Microservicio 1 tiene la ip: "
}

output "instance_id_2" {
  value       = google_compute_instance.microservicio2.instance_id
  description = "Instance ID del microservicio 2"
}

output "public_ip_2" {
  value       = google_compute_instance.microservicio2.network_interface[0].access_config[0].nat_ip
  description = "Microservicio 2 tiene la ip: "
}