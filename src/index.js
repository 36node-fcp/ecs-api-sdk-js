//@ts-check
import fetch from "@36node/fetch";

export default class SDK {
  /**@type {string} **/
  base;
  /**@type {string} **/
  token;

  /**
   * Sdk auth
   *
   * @returns {string} auth header
   * */
  get auth() {
    let token = this.token;
    // @ts-ignore
    if (typeof token === "function") token = token();
    if (token) return `Bearer ${token}`;

    return "";
  }

  /**
   * Init store sdk
   *
   * @param {Object} opt
   * @param {string} opt.base  base url
   * @param {string} opt.token token for authorization
   */
  constructor(opt = { base: "", token: "" }) {
    this.base = opt.base;
    this.token = opt.token;
  }

  /**
   * illegal's methods
   */
  illegal = {
    /**
     * List illegals
     *
     * @param {ListIllegalsRequest} req listIllegals request
     * @returns {Promise<ListIllegalsResponse>} A paged array of illegals
     */
    listIllegals: req => {
      const { query } = req || {};

      return fetch(`${this.base}/illegals`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Create a illegal
     *
     * @param {CreateIllegalRequest} req createIllegal request
     * @returns {Promise<CreateIllegalResponse>} The illegal created
     */
    createIllegal: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for createIllegal");

      return fetch(`${this.base}/illegals`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Find illegal device by id
     *
     * @param {GetIllegalRequest} req getIllegal request
     * @returns {Promise<GetIllegalResponse>} Expected response to a valid request
     */
    getIllegal: req => {
      const { illegalId } = req || {};

      if (!illegalId) throw new Error("illegalId is required for getIllegal");

      return fetch(`${this.base}/illegal/${illegalId}`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Update illegal device
     *
     * @param {UpdateIllegalRequest} req updateIllegal request
     * @returns {Promise<UpdateIllegalResponse>} The illegal
     */
    updateIllegal: req => {
      const { illegalId, body } = req || {};

      if (!illegalId)
        throw new Error("illegalId is required for updateIllegal");
      if (!body) throw new Error("requetBody is required for updateIllegal");

      return fetch(`${this.base}/illegal/${illegalId}`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Delete illegal device
     *
     * @param {DeleteIllegalRequest} req deleteIllegal request
     */
    deleteIllegal: req => {
      const { illegalId } = req || {};

      if (!illegalId)
        throw new Error("illegalId is required for deleteIllegal");

      return fetch(`${this.base}/illegal/${illegalId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth },
      });
    },
  };
}
