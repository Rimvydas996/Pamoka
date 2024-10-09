var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getUser } from "./service/getUser.js";
function printUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const { success, data } = yield getUser();
        console.log({ success, data });
        if (!success)
            return;
        const user = document.getElementById("user");
        user.textContent = data.name[0];
        user.classList.add("userBubble");
    });
}
export { printUser };
