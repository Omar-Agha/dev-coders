import { translate } from "@/utils/translation";
import { router } from "@inertiajs/vue3";
import { required } from "@vuelidate/validators";
import axios from "axios";
import { date } from "yup";

const ROUTE_NAME = "Examples";

export const breadcrumbs = [
    {
        title: translate("dashboard"),
        disabled: false,
        href: "breadcrumbs_dashboard",
    },
    {
        title: translate("newspaper"),
        disabled: false,
        href: "breadcrumbs_link_1",
    },
    {
        title: translate("link2"),
        disabled: true,
        href: "breadcrumbs_link_2",
    },
];

export const gridHeaders = [
    { title: translate("Actions"), key: "actions", sortable: false },
    { title: translate('Name'), align: "start", value: "name", sortable: true },
    { title: translate('FatherName'), align: "start", value: "father_name", sortable: true },
    { title: translate('MotherName'), align: "start", value: "mother_name", sortable: true },
    { title: translate('BirthDate'), align: "start", value: "birth_date", sortable: true },
    { title: translate('Avatar'), align: "start", value: "avatar", sortable: true },
    { title: translate('Description'), align: "start", value: "description", sortable: true },
];

export const initialCreateForm = {
    name: null,
    father_name: null,
    mother_name: null,
    birth_date: null,
    uploaded_avatar: null,
};

export const storeFormRules = {
    name: { required },
    father_name: {},
    mother_name: { required },
    birth_date: {},
    uploaded_avatar: { required },
};

export const initialUpdateForm = {
    title: null,
    description: null,
    uploaded_avatar: null,
};

export const updateFormRules = {
    title: { required },
    description: {},
    uploaded_avatar: {},
};

export const initialFilterForm = {
    isAdmin: false,
    isFootballGame: true,
    role: 0,
};

export const getRecordsListApi = (
    params,
    onSuccessCallback,
    onErrorCallback,
    onBeforeCallback,
    onAfterCallback
) => {
    if (onBeforeCallback != null) onBeforeCallback();

    axios
        .get(route(`${ROUTE_NAME}.index`), {
            params: params,
        })
        .then((data) => {
            if (onSuccessCallback != null) onSuccessCallback(data);
        })
        .catch((err) => {
            if (onErrorCallback != null) onErrorCallback(err);
        })
        .finally(() => {
            if (onAfterCallback != null) onAfterCallback();
        });
};

export const deleteRecordApi = (
    recordId,
    onSuccessCallback,
    onErrorCallback,
    onBeforeCallback,
    onAfterCallback
) => {
    if (onBeforeCallback != null) onBeforeCallback();

    axios
        .delete(route(`${ROUTE_NAME}.destroy`, recordId))
        .then((data) => {
            if (onSuccessCallback != null) onSuccessCallback(data);
        })
        .catch((err) => {
            if (onErrorCallback != null) onErrorCallback(err);
        })
        .finally(() => {
            if (onAfterCallback != null) onAfterCallback();
        });
};

export const updateRecordApi = (
    recordId,
    recordState,
    onSuccessCallback,
    onErrorCallback,
    onBeforeCallback,
    onAfterCallback
) => {
    recordState["_method"] = "PUT";
    router.post(route(`${ROUTE_NAME}.update`, recordId), recordState, {

        onBefore: () => {
            if (onBeforeCallback != null) onBeforeCallback();
        },
        onFinish: () => {
            if (onAfterCallback != null) onAfterCallback();
        },
        onSuccess: (data) => {
            if (onSuccessCallback != null) onSuccessCallback(data);
        },
        onError: (err) => {
            console.log(err);
            if (Object.hasOwn(err, "business_logic"))
                if (onErrorCallback != null)
                    onErrorCallback(err.business_logic);
        },
    });
};

export const storeRecordApi = (
    recordState,
    onSuccessCallback: (name: string) => void,
    onErrorCallback: (name: string) => void,
    onBeforeCallback: () => void,
    onAfterCallback: () => void
) => {
    router.post(route(`${ROUTE_NAME}.store`), recordState, {
        onError: (err) => {

            if (Object.hasOwn(err, "business_logic"))
                if (onErrorCallback != null)
                    onErrorCallback(err.business_logic);
        },
        onSuccess: (data) => {

            if (onSuccessCallback != null) onSuccessCallback(data);
        },
        onBefore: () => {
            if (onBeforeCallback != null) onBeforeCallback();
        },
        onFinish: () => {
            if (onAfterCallback != null) onAfterCallback();
        },
    });
};
export const getRecordById = (
    recordId,
    onSuccessCallback,
    onErrorCallback,
    onBeforeCallback,
    onAfterCallback
) => {
    if (onBeforeCallback != null) onBeforeCallback();

    axios
        .get(route(`${ROUTE_NAME}.show`, recordId))
        .then((data) => {
            if (onSuccessCallback != null) onSuccessCallback(data);
        })
        .catch((err) => {
            if (onErrorCallback != null) onErrorCallback(err);
        })
        .finally(() => {
            if (onAfterCallback != null) onAfterCallback();
        });
};
