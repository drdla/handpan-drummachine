export const images = `
  /*
   * 1. Fluid images for responsive purposes.
   * 2. Setting 'vertical-align' removes the whitespace that appears under 'img'
   *    elements when they are dropped into a page as-is. Safer alternative to
   *    using 'display: block;'.
   */

  img {
    max-width: 100%; /* 1 */
    vertical-align: middle; /* 2 */

    :before {
      background: #fff;
      color: hsl(135, 4%, 74%);
      content: 'no image';
      display: block;
      font-size: 12px;
      height: 100%;
      line-height: 1;
      padding-top: calc(50% - 6px);
      position: absolute;
      text-align: center;
      width: 100%;
    }

    :after {
      content: '';
      display: block;
    }
  }
`;
