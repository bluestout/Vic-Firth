document.addEventListener("DOMContentLoaded", () => {

    if (window.innerWidth >= 992) {
        change();
    }

    document.querySelector('#fs_moreDesc1').addEventListener("click", change)
    document.querySelector('#fs_lessBtn').addEventListener("click", change)

    function change() {
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