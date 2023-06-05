export default async function ({ addon, console, msg }) {
    
    function createBox(_BoxName, _BoxClass, _API, _AllLink, _AllText) {
        let test = document.createElement("template");
        
        test.innerHTML = `
        <div class="box ${"SA-"+_BoxClass}">
            <div class="box-header">
                <h4>${_BoxName}</h4>
                <p>
                    <a href="${_AllLink}">${_AllText}</a>
                </p>
            </div>
            <div class="box-content">
                <div class="slick-initialized slick-slider carousel">
                    <button type="button" data-role="none" class="slick-arrow slick-prev slick-disabled" style="display: block;"> Previous</button>
                    <div class="slick-list"></div>
                    <button type="button" data-role="none" class="slick-arrow slick-next" style="display: block;"> Next</button>
                </div>
            </div>
        </div>`;

        return test.content;
        
    }
    let rem = await addon.tab.waitForElement(".inner.mod-splash")
    // let rem = document.createElement("div");
    console.log(createBox("Recent", "Recent"), document.querySelector(".splash-header").nextSibling)
    rem.insertBefore(createBox("Recent", "Recent", undefined, ), document.querySelector(".splash-header").nextSibling)
    
}