console.log(__twitchIntegrations.mods.onMinecraftInstanceTaskCompleted((data)=>{
    let instId = data.gameInstanceGuid;
    __twitchIntegrations.mods.getMinecraftInstances().then(e=>{
        instances = e.minecraftInstances;
        for (inst of instances) {
            if (inst.guid == instId && inst.isUserCreated == false) {
                new Notification("KdNotifs for TwitchApp",{icon:inst.imageURL,body:inst.name+" has finished downloading!"})
            }
        }
    });
    return ()=>{};
}));
new Notification("KdNotifs for TwitchApp",{icon:"https://github.com/kd8lvt/kd8lvt.github.io/raw/master/assets/kdnotifs_logo.png",body:"KdNotifs Installed!"});
