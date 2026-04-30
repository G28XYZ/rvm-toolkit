# rvm-toolkit Context

rvm-toolkit is a TypeScript toolkit for React MVVM applications built around MobX-backed models, ViewModels, stores, commands, and typed dependency injection.
This file defines project vocabulary for architecture reviews, refactoring discussions, and local skills from `../skills`.

## Language

### MVVM Runtime

**Model**:
A class that owns structured form or domain data, validation state, serialization, and dirty tracking.
_Avoid_: DTO class, form object, entity

**Model Field**:
A decorated Model property that participates in initialization, validation, dumping, and optional MobX observation.
_Avoid_: attribute, column, prop

**Model Service**:
The public control surface exposed as `model.service` for commit, reject, dump, validation, and reload operations.
_Avoid_: helper object, manager, controller

**ViewModel**:
A class that owns UI scenarios and lifecycle logic for a React view.
_Avoid_: component state, presenter, controller

**View**:
A React component wrapped by `view()` and connected to a ViewModel.
_Avoid_: page, screen, widget

**Prop From View**:
A value copied from View props into a ViewModel through `@PropFromView`.
_Avoid_: injected prop, mapped prop

### Data Collections

**Store**:
A DI-registered collection owner for Models and list workflows.
_Avoid_: repository, cache, list service

**Store Item**:
A Model instance held by a Store.
_Avoid_: row, record, child

**Cash**:
The raw loaded data retained by Store before or alongside mapping into Store Items.
_Avoid_: cache, original items, source data

### Dependency Injection

**Service**:
A DI-registered class accessed through `GetService`, `Inject`, or ViewModel wiring.
_Avoid_: singleton, provider, dependency

**Service Key**:
The string or class identity used to register and retrieve a Service.
_Avoid_: token, name, id when referring to the lookup concept

**DI Registry**:
The runtime storage for registered Services and Stores.
_Avoid_: container when referring to runtime storage

**DI Declaration**:
The generated `di.d.ts` module augmentation that connects project container declarations to `DiServices` and `DiStores`.
_Avoid_: DI file, root container

**Container Declaration**:
A generated `container.d.ts` file that exports module-local service/store interfaces.
_Avoid_: container when referring to runtime storage

### Commands

**Command**:
An observable execution wrapper for async or flow work, exposing state, errors, cancellation, and concurrency controls.
_Avoid_: task, action, request

**Command State**:
The current named state of a Command, usually `ready`, `load`, or `failure`.
_Avoid_: status, phase

**Concurrency Mode**:
The Command policy for overlapping executions: `ignore`, `restart`, `queue`, or `parallel`.
_Avoid_: strategy, behavior

### Vite DI Generation

**DI Scan**:
The TypeScript AST pass that extracts Service and Store entries from source files.
_Avoid_: parser, discovery, crawler

**DI Entry**:
A class discovered by DI Scan with a class name, service key, source path, and service/store kind.
_Avoid_: registration, item, record

**Container Patching**:
The pure text update that adds imports and DI Entries to a Container Declaration.
_Avoid_: generation when updating existing text

**DI Patching**:
The pure text update that adds imports and extends clauses to the DI Declaration.
_Avoid_: generation when updating existing text

**Vite DI Plugin**:
The Vite lifecycle adapter that coordinates DI Scan, Container Patching, DI Patching, and file system writes.
_Avoid_: generator when discussing lifecycle behavior

## Relationships

- A **View** is connected to exactly one active **ViewModel** by `view()`.
- A **ViewModel** may own one or more **Models**, **Stores**, **Services**, and **Commands**.
- A **Model** has zero or more **Model Fields**.
- A **Model Field** may be observable or `noObserve`, but still belongs to the **Model** metadata.
- A **Model Service** exposes operations over exactly one **Model** instance.
- A **Store** contains zero or more **Store Items** and may keep **Cash** for raw loaded data.
- A **Service** is registered in the **DI Registry** under one **Service Key**.
- A **DI Scan** produces zero or more **DI Entries** from one source file.
- **Container Patching** writes **DI Entries** into a **Container Declaration**.
- **DI Patching** connects a **Container Declaration** to the **DI Declaration**.
- The **Vite DI Plugin** is the adapter around scan/patch modules and should not own their text-editing implementation.

## Example Dialogue

> **Dev:** "This bug is in the **Vite DI Plugin** or in **DI Patching**?"
> **Domain expert:** "If the source file was found and a **DI Entry** exists, the lifecycle adapter is done; check **DI Patching** because only it should modify `di.d.ts`."

> **Dev:** "Should `@field.noObserve` remove the property from `dumpData`?"
> **Domain expert:** "No — it is still a **Model Field**; it only disables observation and dirty tracking for assignment."

## Flagged Ambiguities

- "container" can mean runtime **DI Registry** or generated **Container Declaration**; use the precise term.
- "service" can mean **Model Service** or DI **Service**; include `model.service` when discussing the Model control surface.
- "field" can mean a TypeScript property or a **Model Field**; use **Model Field** only when decorator metadata is involved.
- "state" can mean React state, **Command State**, or model data; qualify it with the owning concept.
