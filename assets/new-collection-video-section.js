document.addEventListener("DOMContentLoaded", () => {

    if (window.innerWidth >= 992) {
        if (document.querySelector('.boost-pfs-filter-right-col')) {

            var height = document.querySelector('.boost-pfs-filter-right-col').offsetHeight;

            console.log('height', height)

            const interval = setInterval(() => {
                if (document.querySelector('.boost-sd__filter-product-list')) {
                    const style = document.createElement('style');
                    style.textContent = `
                        .boost-sd-left.boost-filter-tree-column {
                            margin-top: -${height + 36}px
                        }
                    `;

                    document.querySelector('#MainContent').appendChild(style)

                    clearInterval(interval);
                }

            }, 200)

        }
    }

})