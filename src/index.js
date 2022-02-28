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
     * confirm an open illegal
     *
     * @param {ConfirmIllegalRequest} req confirmIllegal request
     * @returns {Promise<ConfirmIllegalResponse>} The illegal
     */
    confirmIllegal: req => {
      const { illegalId } = req || {};

      if (!illegalId)
        throw new Error("illegalId is required for confirmIllegal");

      return fetch(`${this.base}/illegal/${illegalId}/!confirm`, {
        method: "PUT",
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
  /**
   * bayonet's methods
   */
  bayonet = {
    /**
     * List bayonets
     *
     * @param {ListBayonetsRequest} req listBayonets request
     * @returns {Promise<ListBayonetsResponse>} A paged array of bayonets
     */
    listBayonets: req => {
      const { query } = req || {};

      return fetch(`${this.base}/bayonets`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Create a bayonet
     *
     * @param {CreateBayonetRequest} req createBayonet request
     * @returns {Promise<CreateBayonetResponse>} The bayonet created
     */
    createBayonet: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for createBayonet");

      return fetch(`${this.base}/bayonets`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Find bayonet device by id
     *
     * @param {GetBayonetRequest} req getBayonet request
     * @returns {Promise<GetBayonetResponse>} Expected response to a valid request
     */
    getBayonet: req => {
      const { bayonetId } = req || {};

      if (!bayonetId) throw new Error("bayonetId is required for getBayonet");

      return fetch(`${this.base}/bayonet/${bayonetId}`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Update bayonet device
     *
     * @param {UpdateBayonetRequest} req updateBayonet request
     * @returns {Promise<UpdateBayonetResponse>} The bayonet
     */
    updateBayonet: req => {
      const { bayonetId, body } = req || {};

      if (!bayonetId)
        throw new Error("bayonetId is required for updateBayonet");
      if (!body) throw new Error("requetBody is required for updateBayonet");

      return fetch(`${this.base}/bayonet/${bayonetId}`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Delete bayonet
     *
     * @param {DeleteBayonetRequest} req deleteBayonet request
     */
    deleteBayonet: req => {
      const { bayonetId } = req || {};

      if (!bayonetId)
        throw new Error("bayonetId is required for deleteBayonet");

      return fetch(`${this.base}/bayonet/${bayonetId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth },
      });
    },
  };
  /**
   * whitelist's methods
   */
  whitelist = {
    /**
     * List whitelist
     *
     * @param {ListWhitelistRequest} req listWhitelist request
     * @returns {Promise<ListWhitelistResponse>} A paged array of whitelist
     */
    listWhitelist: req => {
      const { query } = req || {};

      return fetch(`${this.base}/whitelist`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Create a whitelist
     *
     * @param {CreateWhitelistRequest} req createWhitelist request
     * @returns {Promise<CreateWhitelistResponse>} The whitelist created
     */
    createWhitelist: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for createWhitelist");

      return fetch(`${this.base}/whitelist`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Find whitelist by id
     *
     * @param {GetWhitelistRequest} req getWhitelist request
     * @returns {Promise<GetWhitelistResponse>} Expected response to a valid request
     */
    getWhitelist: req => {
      const { whitelistId } = req || {};

      if (!whitelistId)
        throw new Error("whitelistId is required for getWhitelist");

      return fetch(`${this.base}/whitelist/${whitelistId}`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Update whitelist device
     *
     * @param {UpdateWhitelistRequest} req updateWhitelist request
     * @returns {Promise<UpdateWhitelistResponse>} The whitelist
     */
    updateWhitelist: req => {
      const { whitelistId, body } = req || {};

      if (!whitelistId)
        throw new Error("whitelistId is required for updateWhitelist");
      if (!body) throw new Error("requetBody is required for updateWhitelist");

      return fetch(`${this.base}/whitelist/${whitelistId}`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Delete whitelist
     *
     * @param {DeleteWhitelistRequest} req deleteWhitelist request
     */
    deleteWhitelist: req => {
      const { whitelistId } = req || {};

      if (!whitelistId)
        throw new Error("whitelistId is required for deleteWhitelist");

      return fetch(`${this.base}/whitelist/${whitelistId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth },
      });
    },
  };
}
