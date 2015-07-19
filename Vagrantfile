Vagrant.require_version ">= 1.6.3"

Vagrant.configure("2") do |config|


  config.vm.box = "hashicorp/precise64"
    config.vm.network "private_network", ip: "192.168.34.100"
    config.ssh.forward_agent = true
    config.ssh.forward_x11 = true

    config.vm.synced_folder ".", "/vagrant", type: "nfs"
    config.vbguest.auto_update = true
end
