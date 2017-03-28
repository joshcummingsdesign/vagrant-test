# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
    config.vm.box = "ubuntu/xenial64"
    config.vm.network :forwarded_port, guest: 80, host: 8888
    config.vm.network :forwarded_port, guest: 22, host: 2222
    config.vm.network :forwarded_port, guest: 3000, host: 3000, auto_correct: true
    config.vm.network :forwarded_port, guest: 3001, host: 3001, auto_correct: true
end
