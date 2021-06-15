import { onGetAmplify } from "../../services/network";
import AppConfig from "../../config";

const endpoint = AppConfig.AMPLIFIER_API_BASE_PATH;

let endpoints = {
  loadTransactionDetails: endpoint + `/load-parent-details`
}

export default {
    loadTransactionDetails: () => {
        return onGetAmplify(AppConfig.AMPLIFIER_API_NAME, endpoints.loadTransactionDetails);
    }
}