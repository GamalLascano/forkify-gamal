import View from './View';
import icons from 'url:../../img/icons.svg';
class paginationView extends View {
  _parentElement = document.querySelector('.pagination');
  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (el) {
      const btn = el.target.closest('.btn--inline');
      if (!btn) return;
      const pageSelect = +btn.dataset.goto;
      console.log(pageSelect);
      handler(pageSelect);
    });
  }
  _generateMarkup() {
    const currentPage = this._data.page;
    const numPages = Math.ceil(
      this._data.result.length / this._data.resultsPerPage
    );
    //Page 1 and other pages
    if (currentPage === 1 && numPages > 1)
      return `<button data-goto="${
        currentPage + 1
      }" class="btn--inline pagination__btn--next">
    <span>Page ${currentPage + 1}</span>
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-right"></use>
    </svg>
  </button>`;

    //Last page
    if (currentPage === numPages && numPages > 1)
      return `<button data-goto="${
        currentPage - 1
      }" class="btn--inline pagination__btn--prev">
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-left"></use>
    </svg>
    <span>Page ${currentPage - 1}</span>
  </button>`;

    //Other page
    if (currentPage < numPages)
      return `<button data-goto="${
        currentPage - 1
      }" class="btn--inline pagination__btn--prev">
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-left"></use>
    </svg>
    <span>Page ${currentPage - 1}</span>
  </button>
  <button data-goto="${
    currentPage + 1
  }" class="btn--inline pagination__btn--next">
    <span>Page ${currentPage + 1}</span>
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-right"></use>
    </svg>
  </button>
  `;
    //Page 1 and no pages
    return '';
  }
}
export default new paginationView();
