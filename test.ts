import { fail } from "https://deno.land/std/testing/asserts.ts";
import { doze, dozeMS } from "https://deno.land/x/doze/mod.ts";

Deno.test("doze for 3 seconds", async (): Promise<void> => {

    const startTS = Date.now();
    await doze(3);
    const dur = Date.now() - startTS;
    if (dur < 3000 || dur > 3100){
        fail('could not sleep for the right duration');
    }
});

Deno.test("doze for 500 milliseconds", async (): Promise<void> => {

    const startTS = Date.now();
    await dozeMS(500);
    const dur = Date.now() - startTS;
    if (dur < 500 || dur > 550){
        fail('could not sleep for the right duration');
    }
});
