terraform{
    required_providers {
      google = {
        source = "hashicorp/google"
        version = "~> 4.60"
      }
    }
}

provider "google"{
    project = "alpine-agent-454803-t3"
    region = "us-central1"
    credentials = file("./key.json")
}