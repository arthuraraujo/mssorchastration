package com.mssorchestration;

import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;
import com.vasco.orchestration.client.authentication.UserAuthenticationCallback;
import com.vasco.orchestration.client.user.OrchestrationUser;
import com.vasco.orchestration.commandserializer.exceptions.OrchestrationParsingException;

@ReactModule(name = MssOrchestrationModule.NAME)
public class MssOrchestrationModule extends ReactContextBaseJavaModule {
    public static final String NAME = "MssOrchestration";

    public MssOrchestrationModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    @NonNull
    public String getName() {
        return "MssOrchestration";
    }


    @ReactMethod
    public void authenticateUser(String identifier, String password) {
        Log.d("User Identifier", "PAssword: " + identifier
                + " and location: " + password);
        UserAuthenticationCallback.UserAuthentication(identifier,password)

    }

}
