<template>
    <div class="form-group" :style="{'width': formGroupW}">
        <label class="label required"
               :for="name"
               :style="{'width': labelW}"
        >
            {{ label }}
            <span class="required" v-if="required">*</span>
        </label>

        <input class="input"
               :class="{'input-required': error}"
               :type=type
               :id="name"
               :name="name"
               v-model="value"
               @input="handleInput"
               :style="{'width': inputW}"
               :placeholder="placeholder"
               :maxlength=max
        />
    </div>
</template>

<script>
export default {
    name: 'EvolInput.vue',
    data() {
        return {
            value: this.$attrs.value,
        };
    },
    props: {
        label: {
            type: String,
        },
        name: {
            type: String,
        },
        formGroupW: {
            type: String,
            default: null,
        },
        labelW: {
            type: String,
            default: null,
        },
        inputW: {
            type: String,
            default: null,
        },
        max: {
            type: String,
            default: '30',
        },
        placeholder: {
            type: String,
            default: '',
        },
        type: {
            type: String,
            default: 'text',
        },
        selected: [Number, String],
        required: {
            type: Boolean,
            default: false,
        },
        error: [Boolean, String],
    },
    mounted() {
        this.value = this.selected;
    },
    methods: {
        handleInput() {
            this.$emit('input', this.value);
        },
    },
};
</script>

<style scoped>
.form-group {
    margin-bottom: 25px;
    display: flex;
    flex-direction: column;
}

.label {
    width: 190px;
    font-size: 14px;
    line-height: 16px;
    color: var(--text-color) !important;
    margin-bottom: 4px !important;
}

.input {
    height: 35px;
    width: 320px;
    padding: 8px 12px;
    border-radius: 10px;
    border: 1px solid #E2E2E2;
    color: #494949 !important;
    background-color: #FFFFFF;
    appearance: none !important;
    font-size: 16px;
    line-height: 19px;
}

.input::placeholder {
    font-size: 14px;
    line-height: 16px;
    color: #DDDDDD;
}

.required {
    color: #F13131;
}

.input-required {
    border-color: #F13131;
    color: #F13131;
}
</style>
