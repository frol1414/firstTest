<template>
    <div class="form-group" :style="{'width': formGroupW}">
        <label class="label"
               :class="{required : error}"
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
    name: 'EvolAuthInput.vue',
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
    width: 100%;
    max-width: 415px;
    margin-bottom: 30px;
}

.label {
    font-size: 18px;
    line-height: 21px;
    color: #81878E;
    margin: 0 0 6px 10px;
    display: block;
}

.input {
    width: 100%;
    height: 40px;
    border: 2px solid #013E8C;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 0 10px;
    outline: none;
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
