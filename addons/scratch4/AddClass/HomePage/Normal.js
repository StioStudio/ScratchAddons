export default async function ({ addon, console, msg }) {
    // console.log("hello world")
    async function classAdd (_querySelector, _callName) {
        let rem = await addon.tab.waitForElement(_querySelector)
        rem.classList.add(_callName);
    }

    // console.log(addon.tab.scratchMessage("Comments"))
    
    classAdd(".activity", "SA-activity")
    classAdd(".news", "SA-scratchNews")
    

    let list_name1 = [
        addon.tab.scratchMessage("splash.featuredProjects"),
        addon.tab.scratchMessage("splash.featuredStudios"),
        addon.tab.scratchMessage("splash.communityRemixing"),
        addon.tab.scratchMessage("splash.communityLoving"),
        addon.tab.scratchMessage("splash.projectsLovedByScratchersFollowing"),
        addon.tab.scratchMessage("splash.scratchDesignStudioTitle"),
    ]
    let list_name2 = [
        "SA-featuredProject",
        "SA-featuredStudios",
        "SA-communityRemixing",
        "SA-communityLoving",
        "SA-projectsLovedByScratchersFollowing",
        "SA-scratchDesignStudioTitle",
    ]
    // console.log(list_name1, list_name2)


    for (let b = 0; b < 10; b++) {
        let rem = await addon.tab.waitForElement(".box .box-header h4", {markAsSeen: true,})
        // let rem = document.createElement("h4")
        if (list_name1.includes(rem.innerText)) {
            // console.log(list_name2[list_name1.indexOf(rem.innerText)])
            rem.parentNode.parentNode.classList.add(list_name2[list_name1.indexOf(rem.innerText)]);
        }
    }
}